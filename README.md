# Introduction to React Three Fiber
![Preview](/public/getting_started.png)

## 1. Setup

* **What is react-three-fiber?**
  * [react-three-fiber](https://github.com/pmndrs/react-three-fiber) is a React renderer for [threejs](https://threejs.org/) on the web and react-native
  * Use-cases:
    * Rendering graphics in the browser or with React or React Native
    * Gives more semantic layout and assumes reasonable defaults, making it easy to get up and running quickly.

* **Prerequisites**
  * React, JavaScript, HTML, CSS

* **Environment**
  * [Node](https://nodejs.org/) >= v8.10 and [npm](https://www.npmjs.com/) >= v5.6
  * Install three and react-three-fiber
  ```bash
    npm install three react-three-fiber
  ```
  * [Create React app](https://reactjs.org/docs/create-a-new-react-app.html)
  ```bash
    npx create-react-app react-three-fiber-introduction
    cd react-three-fiber-introduction
    npm start
  ```
* **Assets**
  * Bacic [CSS](https://github.com/haydenlinder/react-three-fiber-intro/blob/main/src/index.css)
  * Assets from [sketchfab](https://sketchfab.com/)

* **The Scene Graph**
![Photo of Scene Graph](https://threejsfundamentals.org/threejs/lessons/resources/images/threejs-structure.svg)
credit: [Three.js Fundamentals](https://threejsfundamentals.org/threejs/lessons/threejs-fundamentals.html)

## 2. Getting Started

* **Setting the Scene**
  * Canvas
  * axes helper 
  * Orbit controls
    * extend
  * floor
  * Pointlight helper
  * background
  * material choices, 
    * color, opacity, emissive, transmissive, metal, reflective, clearcoat
  * animation
    * useThree(), useFrame(() => {}), camera, render, 
    * performance pitfalls
  * texture


Geometry
	- Geometry primitives
	- You can use one example like sphere or cube 
	- Custom geometry
Mesh
	- Show use of materials and geometry objects as mesh
	- You can use examples from previous sections and show how they can be used in a mesh
    -  useThree(), useFrame(() => {}), animation
	- Performance pitfalls
Texture
	- Load cube or sphere with a custom image from file using textures
	- Discuss how you can use a 2d canvas or render from another scene.
Lighting
	- Ambient light
	- Hemisphere Light
	- Directional Light
	- Point light
	- Spot light
Events 
	- Reacting to pointer events
Controls
	- Orbitcontrols
	- Dragcontrols
	- extend
Physics
	- manual, react-spring, or similar
Putting it all together
	- Show the final product as a whole working as a react app in browser
	- Discuss what other things students can try on their own
	- Briefly touch other advanced topics they can look into to get even better understanding
