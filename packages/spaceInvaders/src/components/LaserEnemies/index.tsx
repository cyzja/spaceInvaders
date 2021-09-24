import React from 'react'
import { useStore } from 'effector-react'
import * as THREE from 'three'

import { $laserEnemyPositions } from '../../store'

const LaserEnemies: React.FC = () => {
  const laserEnemyPositions = useStore($laserEnemyPositions)

  const laserColor = new THREE.Color(0x00ff00)

  //console.log('laser', laserPositions)
  return (
    <group>
      {Object.keys(laserEnemyPositions).map((laserId) => (
        <mesh key={laserId} position={laserEnemyPositions[laserId].position}>
          <boxBufferGeometry attach="geometry" args={[0.05, 0.15, 0.1]} />
          <meshStandardMaterial attach="material" emissive={laserColor} />
        </mesh>
      ))}
    </group>
  )
}

export default LaserEnemies
