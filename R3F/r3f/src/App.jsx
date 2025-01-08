import { Canvas } from '@react-three/fiber'
import React from 'react'

const App = () => {
  return (
    <Canvas className='bg-black'>
      <directionalLight position={[10, 10, 10]} />


      
      <mesh position={[1, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} /> 
        {/* x,y,z */}
        <meshStandardMaterial color='orange' />
      </mesh>

      <mesh position={[-1, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} /> 
        {/* x,y,z */}
        <meshStandardMaterial color='orange' />
      </mesh>
    </Canvas>
  )
}

export default App