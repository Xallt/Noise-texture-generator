float random(float x, float seed) {
    return fract(sin(x * 1238.412 + seed * 56.21) * 219.32 + .76 - seed * 89.1);
}
float random(vec2 p, float seed) {
    return random(random(p.x, seed) * random(p.y, seed) + random(p.x * p.y, seed) - random(p.x - p.y, seed) * 129., seed);
}

#pragma glslify: export(random) 