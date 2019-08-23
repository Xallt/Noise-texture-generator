varying vec2 vPos;

uniform float seed;

uniform float scale;
uniform float gain, lacunarity, offsetStrength, offsetScale;
uniform int octaves, channels, offsetOctaves;

#pragma glslify: random = require(./modules/random.glsl)
#pragma glslify: rotate = require(./modules/rotate.glsl)

// Perlin noise
float noise(vec2 p, float seed) {
    vec2 n = floor(p), f = fract(p);
    f = smoothstep(0., 1., f);
    float c = random(n + vec2(0., 1.), seed), d = random(n + vec2(1., 1.), seed),
          a = random(n + vec2(0., 0.), seed), b = random(n + vec2(1., 0.), seed);
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float perlin(vec2 st, float seed) {
    float res = 0.;
    float amplitude = 1.;
    st = st * scale;
    for (int i = 0; i < 8; ++i) {
        if (i >= octaves) {
            break;
        }
        res += amplitude * noise(rotate(st, 5.12 * float(i)), seed);
        amplitude *= gain;
        st *= lacunarity;
    }
    if (gain == 1.) {
        res = res / float(octaves);
    }
    else {
        res = res * (gain - 1.) / (pow(gain, float(octaves)) - 1.); 
    }
    return res;
}
float offsetNoise(vec2 st, float seed) {
    float res = 0.;
    float amplitude = 1.;
    for (int i = 0; i < 8; ++i) {
        if (i >= offsetOctaves) {
            break;
        }
        res += amplitude * noise(rotate(st, 5.12 * float(i)), seed);
        amplitude *= 0.5;
        st *= 2.;
    }
    res = res * .5 / (1. - pow(.5, 8.)); 
    return res;
}

float finalNoise(vec2 st, float seed) {
    vec2 ost = st * offsetScale;
    vec2 offset = vec2(offsetNoise(ost, seed), offsetNoise(ost, random(seed, 2.1)));
    st = st + offset * offsetStrength;
    return perlin(st, seed);
}

void main() {
    if (channels == 1) {
        float r = finalNoise(vPos, seed), 
              g = r, 
              b = r;
        gl_FragColor = vec4(r, g, b, 1.);
    }
    else if (channels == 3) {
        float r = finalNoise(vPos, seed), 
              g = finalNoise(vPos, random(seed, 5.421)), 
              b = finalNoise(vPos, random(seed, 9.5));
        gl_FragColor = vec4(r, g, b, 1.);
    }
}