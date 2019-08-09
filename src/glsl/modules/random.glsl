float random(float x) {
    return fract(sin(x * 1238.412) * 219.32 + .76);
}
float random(vec2 p) {
    return random(random(p.x) * random(p.y) + random(p.x * p.y) - random(p.x - p.y) * 129.);
}

#pragma glslify: export(random) 