import {Color, Scene
}from '../../../node_modules/three/build/three.module.js';

function create_scene(){
    const scene = new Scene()
    scene.background = new Color("white")
    return scene
}

export{create_scene}