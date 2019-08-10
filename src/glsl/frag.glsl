varying vec2 vPos;

uniform float initialScale;
uniform float seed;

#pragma glslify: random = require(./modules/random.glsl, seed=seed)
#pragma glslify: noise = require(./modules/noise.glsl, seed=seed)

void main() {
    // gl_FragColor = vec4(vec3(.1), 1.);
    gl_FragColor = vec4(vec3(noise(vPos * initialScale)), 1.);
}