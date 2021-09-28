import React, { useRef } from 'react'
import { useStore } from 'effector-react'

import { useGLTF } from '@react-three/drei'
import { GroupProps, useFrame, useThree } from '@react-three/fiber'

import { $gameStatus, $playerPosition, changePlayerPotions } from '../../store'
import { GameStatus } from '../../types'

const StarShipModel = (props: GroupProps) => {
  const group = useRef<any>()
  const playerPosition = useStore($playerPosition)
  const { nodes, materials } = useGLTF('/Models/GLTF/LPSP_SmallStarfigher.gltf') as any
  const gameStatus = useStore($gameStatus)

  const { viewport } = useThree()
  const { width } = viewport

  useFrame((state) => {
    if (state.mouse.x < 0.8 && state.mouse.x > -0.8 && gameStatus === GameStatus.Play) {
      //console.log(width, height)
      changePlayerPotions(state.mouse.x * width * 0.95)
      group.current.position.x = state.mouse.x * width * 0.95
    }
  })

  if (gameStatus !== GameStatus.Play) return null

  return (
    <group ref={group} {...props} dispose={null} position={playerPosition}>
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
