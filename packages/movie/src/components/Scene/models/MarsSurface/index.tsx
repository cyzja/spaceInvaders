import React, { memo } from 'react'

import { useGLTF } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'

import ModelWrapper from '../ModelWrapper'

const MarsSurface: React.FC<MeshProps> = (props) => {
  return <ModelWrapper modelPath="/Models/GLTF/mars-surface/scene.gltf" mass={10} {...props} />
}

useGLTF.preload('/Models/GLTF/mars-surface/scene.gltf')

export default memo(MarsSurface)
