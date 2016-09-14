"use strict";

var $ = require("dom");
var DB = require("tfw.data-binding");
var WebGL = require("tfw.webgl");
var Shaders = require("shaders");

/**
 * @class WorldGeometry
 *
 * Arguments:
 * * __visible__ {boolean}: Visibility of the component.
 *
 * @example
 * var WorldGeometry = require("demo.world-geometry");
 * var instance = new WorldGeometry({visible: false});
 */
var WorldGeometry = function(opts) {
    var elem = $.elem( this, 'canvas' );
    var rendered = new WebGL.Renderer( elem );
    
    DB.propRemoveClass( this, 'visible', 'hide' );
    DB.propInteger( this, 'width' )(function(v) {
        $.css( elem, {width: v + "px"} );
        $.att( elem, {width: v } );
    });
    DB.propInteger( this, 'height' )(function(v) {
        $.css( elem, {height: v + "px"} );
        $.att( elem, {height: v } );
    });
    opts = DB.extend({
        visible: true,
        width: 240,
        height: 240
    }, opts, this);

    var img = new Image();
    img.src = "css/demo.world-geometry/hero.png";
    img.onload = function() {
        
    };
};


module.exports = WorldGeometry;
