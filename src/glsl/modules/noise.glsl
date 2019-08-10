#pragma glslify: random = require(./random.glsl, seed=seed)

float noise(vec2 p) {
    vec2 n = floor(p), f = fract(p);
    f = smoothstep(0., 1., f);
    float c = random(n + vec2(0., 1.)), d = random(n + vec2(1., 1.)),
          a = random(n + vec2(0., 0.)), b = random(n + vec2(1., 0.));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

#pragma glslify: export(noise)