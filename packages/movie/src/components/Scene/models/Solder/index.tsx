import React, { memo } from 'react'

import { useGLTF } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'

import ModelWrapper from '../ModelWrapper'

const Solder: React.FC<MeshProps> = (props) => {
  return (
    <ModelWrapper
      actionName="M_Med_MeteorMan_Body.ao|Heist_Male_Idle"
      modelPath="/Models/GLTF/fortnite/scene.gltf"
      mass={10}
      {...props}
    />
  )
}

useGLTF.preload('/Models/GLTF/fortnite/scene.gltf')

export default memo(Solder)
