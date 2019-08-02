// import Random from 'random'

class NoiseGenerator {
  static random(x) {
    return (Math.sin(x * 1219.128) * 13221.21) % 1
  }
  static random2(x, y) {
    return NoiseGenerator.random(NoiseGenerator.random(x * y) + NoiseGenerator.random(x) - NoiseGenerator.random(y))
  }
  static noise() {
    return (x, y) => {
      var k = NoiseGenerator.random2(x, y)
      return [k, k, k]
    }
  }
}

export default NoiseGenerator