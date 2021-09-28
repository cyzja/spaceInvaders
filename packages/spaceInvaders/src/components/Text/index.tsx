import React, { useLayoutEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

import { useTexture } from '@react-three/drei'
import { useLoader, Vector3 } from '@react-three/fiber'

interface TextProps {
  vAlign?: string
  hAlign?: string
  size?: number
  color?: string
  text: string
  position: Vector3
}

const Text: React.FC<TextProps> = ({
  text,
  vAlign = 'center',
  hAlign = 'center',
  size = 1,
  color = '#000000',
  position,
}) => {
  const font = useLoader(THREE.FontLoader, '/font/text.font')
  const config = useMemo(
    () => ({
      font,
      size: 40,
      height: 30,
      curveSegments: 32,
      bevelEnabled: true,
      bevelThickness: 6,
      bevelSize: 2.5,
      bevelOffset: 0,
      bevelSegments: 8,
    }),
    [font],
  )
  const mesh = useRef<any>()

  const texture = useTexture('/img/terrazo.png')

  useLayoutEffect(() => {
    const size = new THREE.Vector3()
    mesh.current.geometry.computeBoundingBox()
    mesh.current.geometry.boundingBox.getSize(size)
    mesh.current.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
    mesh.current.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
  }, [text, hAlign, vAlign])
  return (
    <group scale={[0.1 * size, 0.1 * size, 0.1]} position={position}>
      {/* <spotLight intensity={3.5} angle={10.2} penumbra={10} position={[0, 0, 10]} />
      <pointLight position={[10, 10, 100]} color="red" intensity={5.8} /> */}

      <mesh ref={mesh}>
        <textGeometry args={[text, config]} />
        <meshPhysicalMaterial
          envMapIntensity={0.4}
          clearcoat={2.8}
          clearcoatRoughness={0}
          roughness={10}
          metalness={0.9}
          color={color}
          //map={texture}
        />
      </mesh>
    </group>
  )
}

export default Text
