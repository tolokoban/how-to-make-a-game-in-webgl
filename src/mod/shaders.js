"use strict";
/**
 * All the shaders used in this game are defined here.
 * They can use the `#include` directive to put code in common.
 */
var Tools = require("tools");

var VERT_HEADER = "";
var FRAG_HEADER = "precision mediump float;\n";

var vert = {};
var frag = {};
var code;
var prefix;

for( var key in GLOBAL ) {
    prefix = key.substr(0, 5);
    if (prefix == 'vert/') {
        vert[key.substr(5)] = VERT_HEADER + "// File: " + key + "\n"
            + Tools.expandIncludes(GLOBAL, key);
    }
    else if (prefix == 'frag/') {
        frag[key.substr(5)] = FRAG_HEADER + "// File: " + key + "\n"
            + Tools.expandIncludes(GLOBAL, key);
    }
}

exports.vert = vert;
exports.frag = frag;

