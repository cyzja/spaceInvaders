import { createStore } from 'effector'

import { EnemyPosition } from '../../types'
import {
  addEnemyPosition,
  changeEnemyPositionX,
  changeEnemyPositionY,
  clearEnemyGroup,
} from '../events'

export const $enemyPosition = createStore<EnemyPosition>({})
  .on(addEnemyPosition, (prevVal, val) => ({
    ...prevVal,
    ...val,
  }))
  .on(changeEnemyPositionX, (prevVal, val) => {
    Object.keys(prevVal).forEach((id) => {
      prevVal[id].position.setX(prevVal[id].position.x + val)
    })

    return { ...prevVal }
  })
  .on(changeEnemyPositionY, (prevVal, val) => {
    Object.keys(prevVal).forEach((id) => {
      prevVal[id].position.setY(prevVal[id].position.y + val)
    })

    return { ...prevVal }
  })

  .reset([clearEnemyGroup])
