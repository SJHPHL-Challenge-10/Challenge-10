require_relative "lib/engine"
require "open-uri"
require "active_support"
require "active_support/core_ext"
require "parallel"
require "pry"

LOG = nil

class Session < Engine
  def index link, mark = nil
    go link
    session.
      find_all('table#officeholder-table > tbody > tr > td:last-child > a').
      map {|a| a['href'] }
  end

  def pull_judge_page link
    go link
    sleep 2
    JudgeSummary.new session
  end

  def summarize link
    judge = pull_judge_page link
    party = judge.party ? " (#{judge.party})" : nil

    puts "#{judge.name}#{party} began as a judge in #{judge.year_term_began}"
    # puts judge.appointments.any? ?
    #   "#{judge.name} has had #{judge.appontments.count} appointments." :
    #   "#{judge.name} has had no appointments"
    # puts
    judge
  end
end

class JudgeSummary
  def initialize(session)
    @session = session
  end

  attr_reader :session

  def parsed
    @parsed = Nokogiri::XML(session)
  end

  def name
    @name ||= session.find('h1#firstHeading').text
  end

  def blurb
    @blurb ||= session.first('p > b', text: name).ancestor('p').text
  end

  def party
    @party = prepare(blurb.scan(/(\w+) Party/))
  end

  def year_term_began
    @year_term_began ||=
      prepare(blurb.scan(/assumed office in (\d{4})/)) ||
      prepare(blurb.scan(/assumed office on (\w+ \d{1,2}, \d{4})/)) ||
      prepare(blurb.scan(/began serving as a judge.+ in (\d{4})/)) ||
      prepare(blurb.scan(/began serving as a judge.+ on (\w+ \d{1,2}, \d{4})/)) ||
      prepare(blurb.scan(/elected.+ in (\d{4})/))
  end

  def year_term_ends
    @year_term_ends ||=
      prepare(blurb.scan(/term ends in (\d{4})/)) ||
      prepare(blurb.scan(/term expires in (\d{4})/))
  end

  def prepare scan
    scan.flatten[0] || nil
  end

  def appointments
    []
  end
end

session = Session.new(enable_mozilla)

links = session.index 'https://ballotpedia.org/Philadelphia_County,_Pennsylvania_(Judicial)'

judges = links.map {|l| session.summarize l }
binding.pry
