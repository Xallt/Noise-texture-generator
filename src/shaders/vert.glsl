
varying vec2 vPos;

void main() {
    gl_Position = vec4(position.xy, 0., 1.);
    vPos = position.xy / 2. + .5;
}