import { createStore } from 'effector'

import { EnemyPosition } from '../../types'
import { addEnemyPosition, changeEnemyPosition, clearEnemyGroup } from '../events'

export const $enemyPosition = createStore<EnemyPosition>({})
  .on(addEnemyPosition, (prevVal, val) => ({
    ...prevVal,
    ...val,
  }))
  .on(changeEnemyPosition, (prevVal, val) => {
    Object.keys(prevVal).map((id) => (prevVal[id].x = prevVal[id].x + val))
    //console.log('v', prevVal)

    return { ...prevVal }
  })

  .reset([clearEnemyGroup])
