import React, { Suspense, useCallback, useEffect, useState } from 'react'
import * as THREE from 'three'

import { Environment, OrthographicCamera, Plane, Stars, useAspect } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'

import Enemies from '../Enemies'
import LaserController from '../LaserController'
import Lasers from '../Lasers'
import StarShipModel from '../StarShipModel'
import TargetController from '../TargetController'
import styles from './styles.module.css'
const Bg = () => {
  const texture = useLoader(THREE.TextureLoader, '/img/bg.jpeg')
  const scale = useAspect(1286, 574, 1.5)
  return (
    <Plane scale={scale} material-map={texture}>
      <Stars />
    </Plane>
  )
}
const Scene: React.FC = () => {
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
          <StarShipModel rotation={[0.99, 0, 0]} scale={0.2} />
          <Lasers />
          <LaserController />
          <TargetController />

          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene
