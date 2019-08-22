varying vec2 vPos;

uniform float seed;

uniform float scale;
uniform float gain, lacunarity, offsetStrength, offsetScale;
uniform int octaves, channels, offsetOctaves;

#pragma glslify: random = require(./modules/random.glsl, seed=seed)
#pragma glslify: rotate = require(./modules/rotate.glsl)

// Perlin noise
float noise(vec2 p) {
    vec2 n = floor(p), f = fract(p);
    f = smoothstep(0., 1., f);
    float c = random(n + vec2(0., 1.)), d = random(n + vec2(1., 1.)),
          a = random(n + vec2(0., 0.)), b = random(n + vec2(1., 0.));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float perlin(vec2 st) {
    float res = 0.;
    float amplitude = 1.;
    st = st * scale;
    for (int i = 0; i < 8; ++i) {
        if (i >= octaves) {
            break;
        }
        res += amplitude * noise(rotate(st, 5.12 * float(i)));
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
float offsetNoise(vec2 st) {
    float res = 0.;
    float amplitude = 1.;
    for (int i = 0; i < 8; ++i) {
        if (i >= offsetOctaves) {
            break;
        }
        res += amplitude * noise(rotate(st, 5.12 * float(i)));
        amplitude *= 0.5;
        st *= 2.;
    }
    res = res * .5 / (1. - pow(.5, 8.)); 
    return res;
}

float finalNoise(vec2 st) {
    vec2 ost = st * offsetScale;
    float r_a = random(123.) - .5, r_B = random(r_a) * 100. - 50., r_C = random(r_B) * 100. - 50., 
          r_d = random(r_C)  - .5, r_E = random(r_d) * 100. - 50., r_F = random(r_E) * 100. - 50.;
    // vec2 offset = vec2(offsetNoise(vec2(ost.y * r_a + r_B, ost.x * r_a + r_C)), offsetNoise(vec2(ost.y * r_d + r_E, ost.x * r_d + r_F)));
    vec2 offset = vec2(offsetNoise(ost), offsetNoise(rotate(ost, 123.123) + vec2(327., 78.)));
    st = st + offset * offsetStrength;
    return perlin(st);
}

void main() {
    if (channels == 1) {
        float r = finalNoise(vPos), 
              g = r, 
              b = r;
        gl_FragColor = vec4(r, g, b, 1.);
    }
    else if (channels == 3) {
        float r = finalNoise(vPos), 
              g = finalNoise(rotate(vPos, 45.) + vec2(617., 213.)), 
              b = finalNoise(rotate(vPos, 30.) - vec2(617., 213.));
        gl_FragColor = vec4(r, g, b, 1.);
    }
}