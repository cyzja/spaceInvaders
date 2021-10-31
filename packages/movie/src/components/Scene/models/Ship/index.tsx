import React, { memo } from 'react'

import { useGLTF } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'

import ModelWrapper from '../ModelWrapper'

const Ship: React.FC<MeshProps> = (props) => {
  return <ModelWrapper modelPath="/Models/GLTF/gunship/scene.gltf" mass={10} {...props} />
}

useGLTF.preload('/Models/GLTF/fortnite/scene.gltf')

export default memo(Ship)
