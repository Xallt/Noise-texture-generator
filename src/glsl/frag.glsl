varying vec2 vPos;

uniform float seed;

#define MAX_OCTAVES 20

uniform float scale;
uniform float gain, lacunarity, dissolution, offsetScale;
uniform int octaves, motionSteps;

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

// Fractional brownian motion
float fbm(vec2 st) {
    float res = 0.;
    float amplitude = 1.;
    st = st * scale;
    // st += vec2(19.421, -2138.);
    // st = rotate(st, 5.12);
    for (int i = 0; i < MAX_OCTAVES; ++i) {
        if (i >= octaves) {
            break;
        }
        res += amplitude * noise(rotate(st, 5.12 * float(i)));
        amplitude *= gain;
        st *= lacunarity;
        // st += vec2(19.421, -2138.);
        // st = rotate(st, 5.12);
    }
    if (gain == 1.) {
        res = res / float(octaves);
    }
    else {
        res = res * (gain - 1.) / (pow(gain, float(octaves)) - 1.); 
    }
    return res;
}

void main() {
    vec2 st = vPos, ost = st * offsetScale;
    for (int i = 0; i < 10; ++i) {
        if (i >= motionSteps) {
            break;
        }
        float r_a = random(float(i)) - .5, r_B = random(r_a) * 100. - 50., r_C = random(r_B) * 100. - 50., 
              r_d = random(r_C)  - .5, r_E = random(r_d) * 100. - 50., r_F = random(r_E) * 100. - 50.;
        vec2 offset = vec2(fbm(vec2(ost.y * r_a + r_B, ost.x * r_a + r_C)), fbm(vec2(ost.y * r_d + r_E, ost.x * r_d + r_F)));
        st = st + offset * dissolution;
    }
    float res = fbm(st);
    // res = fbm(vPos + vec2(res));
    gl_FragColor = vec4(vec3(res), 1.);
}