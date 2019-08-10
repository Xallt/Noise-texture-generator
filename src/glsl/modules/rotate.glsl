vec2 rotate(vec2 p, float a) {
    return vec2(
        p.x * cos(a) - p.y * sin(a),
        p.x * sin(a) + p.y * cos(a)
    );
}

#pragma glslify: export(rotate)