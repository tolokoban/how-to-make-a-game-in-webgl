#include projection

uniform vec4 uniColor;
attribute vec3 attPosition;
varying vec4 varColor;


void main() {
  projection( attPosition );
  varColor = uniColor;
}
