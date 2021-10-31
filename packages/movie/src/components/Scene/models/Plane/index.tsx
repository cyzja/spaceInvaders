import React, { memo } from 'react'
import * as THREE from 'three'

import { PlaneProps, usePlane } from '@react-three/cannon'

const Plane: React.FC<PlaneProps> = (props) => {
  const [ref] = usePlane(() => ({ type: 'Static', position: [0, 0, 0], ...props }))

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[50, 50]} attach="geometry" />
      <meshStandardMaterial color="#b39363" opacity={0.9} />
    </mesh>
  )
}

export default memo(Plane)
