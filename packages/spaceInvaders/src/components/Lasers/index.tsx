import React from 'react'
import { useStore } from 'effector-react'
import * as THREE from 'three'

import { $laserPositions } from '../../store'

const Lasers: React.FC = () => {
  const laserPositions = useStore($laserPositions)

  const laserColor = new THREE.Color(0xff0860)

  //console.log('laser', laserPositions)
  return (
    <group>
      {Object.keys(laserPositions).map((laserId) => (
        <mesh key={laserId} position={laserPositions[laserId].position}>
          <boxBufferGeometry attach="geometry" args={[0.05, 0.15, 0.1]} />
          <meshStandardMaterial attach="material" emissive={laserColor} />
        </mesh>
      ))}
    </group>
  )
}

export default Lasers
