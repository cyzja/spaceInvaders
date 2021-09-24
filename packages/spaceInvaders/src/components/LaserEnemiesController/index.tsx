import React, { useEffect } from 'react'
import { useStore } from 'effector-react'

import { useFrame } from '@react-three/fiber'

import { $gameStatus, addEnemyLaser, changeLaserEnemyPotions } from '../../store'
import { GameStatus } from '../../types'

const LaserEnemiesController: React.FC = () => {
  const gameStatus = useStore($gameStatus)

  useFrame(() => {
    changeLaserEnemyPotions(0.1)
  })
  useEffect(() => {
    const interval = setInterval(
      () => (gameStatus === GameStatus.Play ? addEnemyLaser() : null),
      3000,
    )

    return () => {
      clearInterval(interval)
    }
  }, [gameStatus])

  return null
}

export default LaserEnemiesController
