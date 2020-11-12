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
  * Geometry
    * Geometry primitives
    * Lines
    * Custom geometry
  * Lights
    * Pointlight helper
  * background
    * Loaders
  * material choices, 
    * color, opacity, emissive, transmissive, metal, reflective, clearcoat
  * animation
    * useThree(), useFrame(() => {}), camera
    * frame rates and smooth rendering
    * performance pitfalls
  * texture

## 3. Interaction and Physics

* **Controls**
  * extend
  * Orbit controls
  * Events
	* Dragcontrols

* **Physics**
  * use-cannon https://github.com/pmndrs/use-cannon

## 4. Putting it all together

* Other things students can try on their own
  * Using Assets
  * Soft-shadows
  * postprocessing
