import React, { memo } from 'react'

import { useGLTF } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'

import ModelWrapper from '../ModelWrapper'

const Chest: React.FC<MeshProps> = (props) => {
  return <ModelWrapper modelPath="/Models/GLTF/chest/scene.gltf" mass={10} {...props} />
}

useGLTF.preload('/Models/GLTF/chest/scene.gltf')

export default memo(Chest)
