import React from 'react'
import { useStore } from 'effector-react'

import { useFrame } from '@react-three/fiber'

import {
  $laserEnemyPositions,
  $playerPosition,
  changeGameStatus,
  killEnemyLaser,
} from '../../store'
import { GameStatus } from '../../types'

const TargetPlayerController: React.FC = () => {
  const playerPosition = useStore($playerPosition)
  const laserEnemyPositions = useStore($laserEnemyPositions)
  useFrame(() => {
    Object.keys(laserEnemyPositions).map((laserId) => {
      if (playerPosition.distanceTo(laserEnemyPositions[laserId].position) < 0.3) {
        killEnemyLaser(laserId)
        changeGameStatus(GameStatus.GameOver)
        console.log('kill')
      }
    })
  })

  return null
}

export default TargetPlayerController
