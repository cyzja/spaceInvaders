import React from 'react'
import * as THREE from 'three'

import { useFrame } from '@react-three/fiber'

import { addLaser, changeLaserPotions } from '../../store'

const LaserController: React.FC = () => {
  useFrame(() => {
    changeLaserPotions(0.1)
  })

  const handleClick = () => addLaser()

  const laserColor = new THREE.Color(0xff0860)

  return (
    <mesh position={[0, 0, -8]} onClick={handleClick}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial
        attach="material"
        color="orange"
        emissive={laserColor}
        visible={false}
      />
    </mesh>
  )
}

export default LaserController
