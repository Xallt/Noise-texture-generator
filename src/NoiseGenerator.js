// import Random from 'random'

class NoiseGenerator {
  static random(x, seed) {
    seed = seed || 0
    return (Math.sin(x * (1219.128 + seed * 112.2)) * (13221.21 - seed * 89.12)) % 1
  }
  static random2(x, y, seed) {
    return NoiseGenerator.random(NoiseGenerator.random(x * y, seed) + NoiseGenerator.random(x, seed) - NoiseGenerator.random(y, seed))
  }
  static noise(params) {
    let s = parseInt(params.text)
    return (x, y) => {
      var k = NoiseGenerator.random2(x, y, s)
      return [k, k, k]
    }
  }
}

export default NoiseGenerator