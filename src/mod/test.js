var $ = require("dom");
var Shaders = require("shaders");

var key, pre;
var body = document.body;

$.add( body, $.tag("h1", ["Vertex shaders"]) );

for( key in Shaders.vert ) {
    $.add(
        body,
        $.tag("h2", [key]),
        $.tag("pre", [Shaders.vert[key]])
    );
}

$.add( body, $.tag("h1", ["Fragment shaders"]) );

for( key in Shaders.frag ) {
    $.add(
        body,
        $.tag("h2", [key]),
        $.tag("pre", [Shaders.frag[key]])
    );
}

