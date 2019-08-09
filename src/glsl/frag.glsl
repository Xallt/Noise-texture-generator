varying vec2 vPos;

uniform float initialScale;
uniform float seed;

#pragma glslify: random = require(./modules/random.glsl, seed=seed)
#pragma glslify: perlin = require(./modules/perlin.glsl, seed=seed)

void main() {
    // gl_FragColor = vec4(vec3(.1), 1.);
    gl_FragColor = vec4(vec3(perlin(vPos * initialScale)), 1.);
}