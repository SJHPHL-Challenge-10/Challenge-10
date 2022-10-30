class Cache
  def initialize dir
    FileUtils.mkdir_p dir
    @dir = dir
  end

  attr_reader :dir

  def lines node
    n = File.join(dir, node)
    File.exist?(n) ?
      File.read(n).lines.map(&:strip) :
      yield.tap {|ls| File.write n, ls.join("\n") + "\n" }
  end

  def record node
    n = File.join(dir, node)
    File.exist?(n) ?
      File.read(n) :
      yield.tap {|r| File.write n, r }
  end
end
