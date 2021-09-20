import React from 'react'
import { useStore } from 'effector-react'

import { useFrame } from '@react-three/fiber'

import { $enemy, $enemyPosition, $laserPositions, killEnemy, killLaser } from '../../store'

const TargetController: React.FC = () => {
  const enemy = useStore($enemy)
  const enemyPosition = useStore($enemyPosition)
  const laserPositions = useStore($laserPositions)
  useFrame(() => {
    // const enemyHeight = new Set<number>()
    // Object.keys(enemyPosition).map((enemyId) => {
    //   enemyHeight.add(enemyPosition[enemyId].y)
    // })
    Object.keys(laserPositions).map((laserId) => {
      Object.keys(enemyPosition).map((enemyId) => {
        if (
          !enemy[enemyId].isKill &&
          laserPositions[laserId].position.distanceTo(enemyPosition[enemyId].position) < 0.3
        ) {
          killEnemy(enemyId)
          killLaser(laserId)
          console.log(
            'kill',
            enemyId,
            laserPositions[laserId].position,
            enemyPosition[enemyId].position,
            laserPositions[laserId].position.distanceTo(enemyPosition[enemyId].position),
          )
        }
      })
    })
  })

  return null
}

export default TargetController
