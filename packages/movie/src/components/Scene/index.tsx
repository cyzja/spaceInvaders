import React, { Suspense } from 'react'
import * as THREE from 'three'

import { Physics } from '@react-three/cannon'
import { OrbitControls, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import Loader from './components/Loader'
import { Chest, MarsSurface, Plane, Solder } from './models'
import styles from './styles.module.css'

const Scene: React.FC = () => {
  return (
    <div className={styles.scene}>
      <Canvas shadows camera={{ position: [0, 3, 18], fov: 50 }}>
        <OrbitControls />
        <ambientLight intensity={0.8} />
        <pointLight position={[-350, 150, 100]} />
        <pointLight position={[-10, -10, -5]} />
        <Stars radius={80} depth={5} count={5000} factor={4} saturation={0} fade />
        <Physics>
          <Suspense fallback={<Loader />}>
            <MarsSurface rotation={[0, 3.5, 0]} scale={50} position={[5, 4, 0]} />
            <Solder rotation={[0, 0, 0]} scale={2} position={[0, 0.5, 14]} />
            <Chest rotation={[0, 0.1, 0]} scale={1} position={[5, 0.5, 7]} />
            <Plane rotation={[-Math.PI / 2, 0, 0]} />
          </Suspense>
        </Physics>
      </Canvas>
    </div>
  )
}

export default Scene
