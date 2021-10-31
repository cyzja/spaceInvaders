import React, { Suspense, useCallback, useEffect, useState } from 'react'
import * as THREE from 'three'

import { Environment, OrthographicCamera, Plane, Stars, useAspect } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'

import Enemies from '../Enemies'
import GameOverController from '../GameOverController'
import LaserController from '../LaserController'
import LaserEnemies from '../LaserEnemies'
import LaserEnemiesController from '../LaserEnemiesController'
import Lasers from '../Lasers'
import Loader from '../Loader'
import StarShipModel from '../StarShipModel'
import TargetController from '../TargetController'
import TargetPlayerController from '../TargetPlayerController'
import WinController from '../WinController'
import styles from './styles.module.css'

const Scene: React.FC = () => {
  return (
    <div className={styles.scene} style={{ background: 'url(/img/bg.jpeg)' }}>
      <></>
      <Canvas>
        <OrthographicCamera makeDefault position={[0, 0, 12]} zoom={50}></OrthographicCamera>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 5]} />
        <pointLight position={[-10, -10, -5]} />
        <Suspense fallback={<Loader />}>
          <Enemies />
          <StarShipModel rotation={[0.99, 0, 0]} scale={0.2} />
          <Lasers />
          <LaserController />
          <LaserEnemiesController />
          <LaserEnemies />
          <TargetController />
          <TargetPlayerController />
          <GameOverController />
          <WinController />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene
