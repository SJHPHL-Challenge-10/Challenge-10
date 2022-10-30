require "capybara"
require "selenium-webdriver"

def enable_chrome
  Capybara.register_driver :chrome do |app|
    Capybara::Selenium::Driver.new(
      app,
      browser: :chrome,
      options: Selenium::WebDriver::Chrome::Options.new(args: %w[headless disable-gpu]),
    )
  end

  Capybara.javascript_driver = :chrome
  Capybara::Session.new(:chrome)
end

def enable_chrome_headed
  Capybara.register_driver :headed_chrome do |app|
    Capybara::Selenium::Driver.new(
      app,
      browser: :chrome,
      :desired_capabilities => Selenium::WebDriver::Remote::Capabilities.chrome(
        'goog:chromeOptions' => {
          'args' => [ "--disable-notifications" ],
          'prefs' => {
            'profile.default_content_setting_values.notifications' => 2,
          },
        }
      )
    )
  end

  Capybara.javascript_driver = :headed_chrome
  Capybara::Session.new(:headed_chrome)
end

def enable_chrome_headless
  Capybara.register_driver :headless_chrome do |app|
    Capybara::Selenium::Driver.new(
      app,
      browser: :chrome,
      capabilities: Selenium::WebDriver::Remote::Capabilities.chrome(
        'goog:chromeOptions' => {
          'args' => [ '--disable-notifications', '--headless', '--disable-gpu' ],
          'prefs' => {
            'profile.default_content_setting_values.notifications' => 2,
          },
        }
      )
    )
  end

  Capybara.javascript_driver = :headless_chrome
  Capybara::Session.new(:headless_chrome)
end

def enable_mozilla
  memory = File.join ENV.fetch('HOME'), 'snap/firefox/common/selenium'
  FileUtils.mkdir_p memory
  ENV["TMPDIR"] = memory

  Capybara.register_driver :mozilla do |app|
    # options = { :js_errors => false }
    Capybara::Selenium::Driver.new(app, :browser => :firefox)
  end

  Capybara.default_driver = :mozilla
  Capybara::Session.new(:mozilla)
end

class Engine
  def initialize(session)
    @session = session
  end

  attr_accessor :session

  def go(address)
    resilience { session.visit(address) }
  end

  def load_page
    window = session.driver.browser.window_handles
    session.driver.browser.switch_to.window(window.last)
  end

  # https://stackoverflow.com/questions/24745675
  def close_page
    window = session.driver.browser.window_handles

    if window.size > 1
      session.driver.browser.switch_to.window(window.last)
      session.driver.browser.close
    end

    session.driver.browser.switch_to.window(window.first)
  end

  def resilience(max = 6, clock = 2)
    number ||= 0
    yield
  rescue
    puts "Error ##{number+1}/#{max}"
    sleep clock
    retry if (number += 1) < max
  end
end
