import React, { useRef, useState } from 'react'

import { Box, useGLTF } from '@react-three/drei'
import { GroupProps, useFrame, useThree } from '@react-three/fiber'

const StarShipModel = (props: GroupProps) => {
  const group = useRef<any>()
  const { nodes, materials } = useGLTF('/Models/GLTF/LPSP_SmallStarfigher.gltf') as any

  const { viewport } = useThree()
  const { width } = viewport

  useFrame((state) => {
    if (state.mouse.x < 0.8 && state.mouse.x > -0.8) {
      //console.log(width, height)
      group.current.position.x = state.mouse.x * width * 0.95
    }

    //group.current.position.y += state.mouse.y
    //group.current.position.z = Math.sin(state.clock.getElapsedTime() * 40) * Math.PI * 0.2
    //console.log(state.mouse.x)
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.LowPolyColours}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_1.geometry}
        material={materials.LowPolyGlow}
      />
    </group>
  )
}

useGLTF.preload('/Models/GLTF/LPSP_SmallStarfigher.gltf')

export default StarShipModel
