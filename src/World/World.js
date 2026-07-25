
import { create_camera,create_controls } from "./Components/camera.js"
import { create_scene } from "./Components/scene.js"
import { create_cube } from "./Components/cube.js"
import { create_DirectionalLight } from "./Components/light.js"
import { create_AmbientLight } from "./Components/light.js"
import { create_renderer } from "./Systems/renderer.js"
import { Resizer } from "./Systems/Resizer.js"

class World {
    constructor(container){

        this.scene=create_scene()
        this.camera=create_camera()
        
        this.cube=create_cube()
        this.scene.add(this.cube)

        this.ambientLight = create_AmbientLight()
        this.directionalLight = create_DirectionalLight()
        this.directionalLight.position.set(10, 20, 15)

        this.scene.add(this.ambientLight)
        this.scene.add(this.directionalLight)

        this.renderer = create_renderer()
        container.append(this.renderer.domElement)

        this.control= create_controls(this.camera,this.renderer)

        
        this.resizer = new Resizer(container, this.camera, this.renderer)

    }
    render(){
        this.renderer.render(this.scene, this.camera)
    }

    animate(){
        requestAnimationFrame(() => this.animate())
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01
        this.cube.rotation.z += 0.01

        this.control.update()
        this.renderer.render(this.scene, this.camera)
    }
    
}



export{World}