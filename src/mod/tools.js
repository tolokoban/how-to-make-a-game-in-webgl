"use strict";


// Regexp used in `expandIncludes()`.
var RX_INCLUDE = /^[ \t]*#include[ \t]+["'<]?([^"'> \t\r\n]+)/;

/**
 * `values` is a dictionary of GLSL codes which can use the `#include`
 * directive to include other code.
 * This function reads the value of `name` in the dictionary `values`,
 * then it looks for any line  beginning with `#include` and expand it
 * by looking in the `values` dictionary again.
 * Do  not put  any quote  arround  the  name to  include, just  write
 * `#include name`.
 * The function is  recursive and will complain if there  is a loop of
 * inclusions.  That's the  purpose of  the `lastInclusions`  argument
 * which should be leved undefined.
 */
function expandIncludes(values, name, lastInclusions) {
    if( typeof lastInclusions === 'undefined' ) lastInclusions = [];

    var code = values[name];
    if( typeof code === 'undefined' ) {
        throw Error("There is no attribue `" + name + "` in " + JSON.stringify(values) + "!");
    }
    
    return code.split("\n").map(function( line, lineNumber ) {
        var match = RX_INCLUDE.exec( line );
        if (!match) {
            // This is not an include.
            return line;
        }
        var includeName = match[1];
        if ( lastInclusions.indexOf( includeName ) > -1 ) {
            // We are in an inclusion infinite loop!
            throw Error("Infinite loop in inclusions detected in file `"
                        + name
                        + "` at line " + (1 + lineNumber) + "!\n"
                        + "Path of inclusions: " + lastInclusions.join(", "));
        }
        var includeText = values[includeName];
        if( typeof includeText === 'undefined' ) {
            // Include not found: we must complain!
            throw Error("Include not found in file `"
                        + name
                        + "` at line " + (1 + lineNumber)
                        + ": \"" + includeName + "\"!");
        }
        lastInclusions.push( includeName );
        var expansion = expandIncludes( values, includeName, lastInclusions );
        lastInclusions.pop();

        return expansion;
    }).join("\n");
}


exports.expandIncludes = expandIncludes;
