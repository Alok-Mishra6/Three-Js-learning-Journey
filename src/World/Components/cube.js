import {BoxGeometry, Mesh, MeshStandardMaterial 
}from '../../../node_modules/three/build/three.module.js';

function create_cube(){

    const material = new MeshStandardMaterial({ color: 0xff5500 })
    const geometry= new BoxGeometry(2,2,2,2,2,2)

    const cube = new Mesh(geometry, material)

    return cube
}

export{create_cube}