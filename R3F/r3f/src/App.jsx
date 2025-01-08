import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'

const Cube = ({ position, color, size }) => {

  const ref=useRef()

  useFrame((state,delta)=>{
    ref.current.rotation.y+=delta
    // delta is the time between frames (current frame - previous frame)
    
    
  })


  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      {/* x,y,z */}
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

const Sphere =({position,color,size})=>{

  const[ishover,setishover]=useState(false)

  const circleref=useRef()

  useFrame((state,delta)=>{
    circleref.current.rotation.y+=delta
    // delta is the time between frames (current frame - previous frame)
    
    
  })


  return(
    <mesh position={position} ref={circleref} onPointerEnter={(event)=>setishover(true)} onPointerLeave={(event)=>setishover(false)}>
      <sphereGeometry args={size} />
      <meshStandardMaterial color={`${ishover?'red':'green'}`} wireframe={true}/>
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas className='bg-black'>
      <directionalLight position={[10, 10, 10]} />
      <ambientLight intensity={0.5} />

      {/* <group>

      <Cube position={[1, 0, 0]} color='orange' size={[1, 1, 1]} />

      <Cube position={[0, 2, 0]} color='red' size={[1, 1, 1]} />

      </group> */}


    <Cube position={[0, 2, 0]} color={'red'} size={[1, 1, 1]} />

    <Sphere position={[0, 0, 0]} color={'blue'} size={[1, 30, 30]} />

   <OrbitControls   />
    </Canvas>
  )
}

export default App