import React, { useRef } from 'react'

import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'

const EnemyStarShipModel = (props: GroupProps) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Models/GLTF/LPSP_LuxuryShip.gltf') as any
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.LowPolyColours}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003_1.geometry}
        material={materials.LowPolyGlow}
      />
    </group>
  )
}

useGLTF.preload('/Models/GLTF/LPSP_LuxuryShip.gltf')

export default EnemyStarShipModel
