import React, { Suspense, useCallback, useEffect, useState } from 'react'
import * as THREE from 'three'

import {
  Environment,
  OrthographicCamera,
  Plane,
  Stars,
  useAspect,
  useTexture,
} from '@react-three/drei'
import { Canvas, useLoader, useThree, Vector3 } from '@react-three/fiber'

import Enemies from '../Enemies'
import EnemyStarShipModel from '../EnemyStarShipModel'
import StarShipModel from '../StarShipModel'
import styles from './styles.module.css'

const Sphere = () => {
  const texture = useTexture('/img/terrazo.png')
  return (
    <mesh>
      <sphereBufferGeometry args={[1, 164, 64]} />
      <meshPhysicalMaterial
        envMapIntensity={0.4}
        map={texture}
        clearcoat={0.8}
        clearcoatRoughness={0}
        roughness={1}
        metalness={0.9}
      />
    </mesh>
  )
}

const Bg = () => {
  const texture = useLoader(THREE.TextureLoader, '/img/bg.jpeg')
  const scale = useAspect(1286, 574, 1.5)
  return (
    <Plane scale={scale} material-map={texture}>
      <Stars />
    </Plane>
  )
}

// const Star = () => {
//   const starsMaterials = [
//     { color: 0x555555, size: 2, sizeAttenuation: false },
//     { color: 0x555555, size: 1, sizeAttenuation: false },
//     { color: 0x333333, size: 2, sizeAttenuation: false },
//     { color: 0x3a3a3a, size: 1, sizeAttenuation: false },
//     { color: 0x1a1a1a, size: 2, sizeAttenuation: false },
//     { color: 0x1a1a1a, size: 1, sizeAttenuation: false },
//   ]
//   const starArr = []

//   for (let i = 10; i < 30; i++) {
//     starArr.push(
//       <>
//         <points
//           rotation={[Math.random() * 6, Math.random() * 6, Math.random() * 6]}
//           scale={i * 10}
//           position={[0, 0, 0]}
//         />
//         <pointsMaterial {...starsMaterials[i % 6]} />
//       </>,
//     )
//   }

//   return (
//     <mesh>
//       <points
//         rotation={[Math.random() * 6, Math.random() * 6, Math.random() * 6]}
//         scale={11 * 10}
//         position={[0, 0, 0]}
//         matrixAutoUpdate={false}
//       />
//       <pointsMaterial color={0x333333} size={10} />
//     </mesh>
//   )
// }

const Scene: React.FC = () => {
  const [position, setPosition] = useState<[x: number, y: number, z: number]>([0, -4.8, 0.6])

  const downHandler = useCallback(
    ({ key }: KeyboardEvent) => {
      console.log('key', key, position)
      switch (key) {
        case 'ArrowLeft':
          setPosition([position[0] - 0.1, position[1], position[2]])
          break
        case 'ArrowRight':
          setPosition([position[0] + 0.1, position[1], position[2]])
          break
        default:
          break
      }
    },
    [position],
  )

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler)
    }
  }, [downHandler])
  //camera={{ position: [0, 5, 12], fov: 50 }}
  return (
    <div className={styles.scene}>
      <></>
      <Canvas>
        <OrthographicCamera makeDefault position={[0, 0, 12]} zoom={50}></OrthographicCamera>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 5]} />
        <pointLight position={[-10, -10, -5]} />
        <Suspense fallback={<>mmmm</>}>
          <Bg />

          <Enemies />
          <StarShipModel position={position} rotation={[0.99, 0, 0]} scale={0.2} />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene
