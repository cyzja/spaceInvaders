import React, { useEffect } from 'react'
import { useStore } from 'effector-react'

import { useFrame, useThree } from '@react-three/fiber'

import {
  $enemy,
  $enemyPosition,
  $enemyRotation,
  addEnemyGroup,
  changeEnemyPositionX,
  changeEnemyPositionY,
  changeEnemyRotation,
  clearEnemyGroup,
} from '../../store'
import { EnemyType } from '../../types'
import EnemyStarShipModel from '../EnemyStarShipModel'

const Enemies: React.FC = () => {
  const enemies = useStore($enemy)
  const enemyPosition = useStore($enemyPosition)
  const enemyRotation = useStore($enemyRotation)

  const { viewport } = useThree()
  const { width, height } = viewport

  useEffect(() => {
    addEnemyGroup([
      {
        type: EnemyType.Solder,
        isKill: false,
      },
      {
        type: EnemyType.Solder,
        isKill: false,
      },
      {
        type: EnemyType.Solder,
        isKill: false,
      },
      {
        type: EnemyType.Solder,
        isKill: false,
      },
    ])
    return () => clearEnemyGroup()
  }, [])

  useFrame(({ clock: { elapsedTime } }) => {
    changeEnemyPositionX((Math.sin(elapsedTime) / 1000) * width)
    //changeEnemyPositionY(Math.sin(elapsedTime) / 1000)
    changeEnemyRotation(Math.sin(elapsedTime) / 3)
  })

  //console.log('enemyPosition', enemyPosition)
  return (
    <group>
      {Object.keys(enemies).map((enemyId) => (
        <mesh
          key={enemyId}
          position={[
            enemyPosition[enemyId].position.x,
            enemyPosition[enemyId].position.y,
            enemyPosition[enemyId].position.z,
          ]}
          rotation={enemyRotation}
          visible={!enemies[enemyId].isKill}
        >
          <EnemyStarShipModel rotation={[4.9, 0.0, 0]} scale={0.08} />

          {/* <icosahedronGeometry attach="geometry" args={[0.2, 0]} />
          <meshStandardMaterial attach="material" color="red" /> */}
        </mesh>
      ))}
    </group>
  )
}

export default Enemies
