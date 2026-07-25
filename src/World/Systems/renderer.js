
import {WebGLRenderer
}from '../../../node_modules/three/build/three.module.js';

function create_renderer(){
    const renderer = new WebGLRenderer()
    return renderer
}

export{create_renderer}