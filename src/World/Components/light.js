import {DirectionalLight, AmbientLight} from '../../../node_modules/three/build/three.module.js';

function create_AmbientLight(){
    const ambientLight = new AmbientLight(0xffffff, 0.4)
    return ambientLight
}

function create_DirectionalLight(){
    const directional_light= new DirectionalLight(0xffffff, 2)
    return directional_light

}

export{create_AmbientLight, create_DirectionalLight}