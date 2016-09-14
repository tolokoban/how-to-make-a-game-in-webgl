uniform vec3 uniProjScale;
uniform vec3 uniProjCenter;
uniform float uniProjAlpha;
uniform float uniProjBeta;

void function projection( vertexCoords ) {
  vec3 pos = (vertexCoords - uniProjCenter) * uniProjScale;
  
  gl_Position = vec3(pos.x + uniProjAlpha * pos.z,
                     pos.y + uniProjBeta * pos.z,
                     pos.z);
}
