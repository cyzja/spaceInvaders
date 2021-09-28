import React, { useState } from 'react'
import { useStore } from 'effector-react'

import { useThree } from '@react-three/fiber'

import { $gameStatus, addEnemyGroup, changeGameStatus, clearEnemyGroup } from '../../store'
import { EnemyType, GameStatus } from '../../types'
import Text from '../Text'

const GameOverController: React.FC = () => {
  const { viewport } = useThree()
  const { width, height } = viewport
  const gameStatus = useStore($gameStatus)

  const [restartHover, setRestartHover] = useState(false)

  if (gameStatus !== GameStatus.GameOver) return null

  const handleClick = () => {
    clearEnemyGroup()
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
    changeGameStatus(GameStatus.Play)
  }

  const handleMouseOn = () => setRestartHover(true)
  const handleMouseLeave = () => setRestartHover(false)

  return (
    <>
      <Text
        hAlign="center"
        position={[0, 0, 0]}
        size={width * 0.03}
        text="Game Over"
        color="#dedede"
      />
      <mesh onClick={handleClick} onPointerEnter={handleMouseOn} onPointerLeave={handleMouseLeave}>
        <Text
          hAlign="center"
          position={[0, -3, 0]}
          size={width * 0.02}
          text="restart"
          color={restartHover ? '#e5ff00' : '#dedede'}
        />
      </mesh>
    </>
  )
}

export default GameOverController
