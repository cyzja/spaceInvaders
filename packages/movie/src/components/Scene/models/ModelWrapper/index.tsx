import React, { memo, useEffect, useRef } from 'react'
import { Object3D } from 'three'

import { Triplet, useConvexPolyhedron } from '@react-three/cannon'
import { useAnimations, useGLTF } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'

interface ModelWrapper extends MeshProps {
  modelPath: string
  mass: number
  actionName?: string
}

const ModelWrapper: React.FC<ModelWrapper> = ({
  position,
  rotation,
  modelPath,
  mass,
  actionName,
  ...props
}) => {
  const group: React.Ref<Object3D | undefined | null> = useRef()
  const { scene, animations } = useGLTF(modelPath)
  const { actions } = useAnimations(animations, group)
  const [ref] = useConvexPolyhedron(() => ({
    mass,
    position: position as Triplet,
    rotation: rotation as Triplet,
    args: [],
    type: 'Static',
  }))

  useEffect(() => {
    console.log('actions', actions)
    actionName && actions?.[actionName]?.play()
  }, [actionName, actions])

  return (
    <mesh ref={ref} {...props}>
      <group ref={group}>
        <primitive object={scene} />
      </group>
    </mesh>
  )
}

export default memo(ModelWrapper)
