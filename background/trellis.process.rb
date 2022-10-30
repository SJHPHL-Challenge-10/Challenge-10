require_relative "lib/engine"
require_relative "lib/cache"
require "open-uri"
require "active_support"
require "active_support/core_ext"
require "parallel"
require "pry"
require "json"

LOG = nil

class Session < Engine
  def index link, mark = nil
    go link; pager= nil; links = []
    begin
      links << session.find_all('td.judge-name > a').map {|l| l['href'] }
      pager = session.find('a[rel="next"]') rescue nil
    end while pager and pager.click
    links.flatten
  end

  def pull_judge_page link
    go link
    sleep 4
    PersonalSummary.new session
  end

  def summarize link
    pull_judge_page(link).tap{|p| puts p.name }
  end
end

class PersonalSummary
  def initialize(session)
    @session = session
  end

  attr_reader :session

  def name
    @name ||= session.find('.headerContainer.bio-box h1').text
  end

  def bio
    @bio ||= session.
      find('.card-header', text: 'Biography').
      ancestor('.card').
      find('.card-body').
      text
  end

  def assigned_court
    @assigned_court ||= parse_grid 'Court Info', 2
  end

  def career
    @career ||= parse_grid 'Career History', 3
  end

  def education
    @education ||= parse_grid 'Education', 2
  end

  def press
    @press ||= session.
      find('.card-header', text: /^Articles/).
      ancestor('.card').
      find('.card-body').
      find_all('p').
      map {|p| [p.text.gsub(/#{p.find('a').text}$/, ''), p.find('a').text, p.find('a')['href']] }
  end

  def parse_grid header, columns
    header = session.find('.card-header', text: header)
    cells = header.ancestor('.card').find_all('.card-body td').map(&:text)
    [].tap {|lines| lines << cells.shift(columns) while cells.any? }
  rescue Capybara::ElementNotFound
    []
  end

  def to_h
    {
      name: name,
      assigned: assigned_court,
      bio: bio,
      career: career,
      education: education,
      press: press,
    }
  end
end

c = File.join(File.dirname(File.dirname(__FILE__)), 'cache/trellis')
puts "Cache: #{c}"
cache = Cache.new c
session = Session.new(enable_mozilla)

links = cache.lines('links.index') do
  session.index('https://trellis.law/judges/PA/philadelphia')
end

judges = []
begin
  judges = links.map {|l|
    cache.record("#{File.basename l}.json") {
      session.summarize(l).to_h.to_json
    }
  }
ensure
  binding.pry
end
