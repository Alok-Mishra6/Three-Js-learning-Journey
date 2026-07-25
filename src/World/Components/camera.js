import {PerspectiveCamera
}from '../../../node_modules/three/build/three.module.js';

import { OrbitControls } from '../../../node_modules/three/examples/jsm/controls/OrbitControls.js'


function create_camera(){
    const camera= new PerspectiveCamera(
        35,
        1,
        0.1,
        100
    )

    camera.position.set(0,0,10)
    return camera
}

function create_controls(camera,renderer){
    const control = new OrbitControls(camera, renderer.domElement)
    return control

}

export{create_camera, create_controls}