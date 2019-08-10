varying vec2 vPos;

uniform float seed;

#define MAX_OCTAVES 20

uniform float scale;
uniform float gain, lacunarity;
uniform int octaves;

#pragma glslify: random = require(./modules/random.glsl, seed=seed)
#pragma glslify: noise = require(./modules/noise.glsl, seed=seed)

// Fractional brownian motion
void main() {
    vec2 st = vPos;
    float res = 0.;
    float amplitude = 1.;
    st = st * scale;
    for (int i = 0; i < MAX_OCTAVES; ++i) {
        if (i >= octaves) {
            break;
        }
        res += amplitude * noise(st);
        amplitude *= gain;
        st *= lacunarity;
    }
    if (gain == 1.) {
        res = res / float(octaves);
    }
    else {
        res = res * (gain - 1.) / (pow(gain, float(octaves)) - 1.); 
    }

    gl_FragColor = vec4(vec3(res), 1.);
}