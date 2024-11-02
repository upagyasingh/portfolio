import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal , Float , OrbitControls, Preload , useTexture 
} from '@react-three/drei'

import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] =useTexture([props.imgURL]) 
    return (
    <Float
      speed={1.75} rotationIntensity={1.5} floatIntensity={2}
    >
      <ambientLight intensity={0.5}/>
      <directionalLight position={[0,0,0.5]}/>
      <mesh castShadow receiveShadow scale={3}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial color='white' polygonOffset polygonOffsetFactor={-5} flatShading/>
        <Decal position={[0,0,1]} rotation={[2*Math.PI,0,7]} map={decal}></Decal>
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon})=>{
  return  <Canvas
  frameloop='demand'
  shadows
  gl={{ preserveDrawingBuffer: true }}
>
  <Suspense fallback={<CanvasLoader />}>
    <OrbitControls
      enableZoom={false}
    />
    <Ball imgURL={icon} />
  </Suspense>

  <Preload all />
</Canvas>
}

export default BallCanvas 