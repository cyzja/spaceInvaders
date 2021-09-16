import { createStore, sample } from 'effector'

import uniqueIdGenerator from '../../helper/uniqueIdGenerator'
import { Enemy, EnemyPosition } from '../../types'
import { addEnemy, addEnemyGroup, addEnemyPosition, clearEnemyGroup } from '../events'

export const $enemy = createStore<Enemy>({})
  .on(addEnemy, (prevVal, val) => ({
    ...prevVal,
    ...val,
  }))
  .reset([clearEnemyGroup])

const targetCreateEnemy = sample({
  clock: addEnemyGroup,
  fn: (enemyRows) => {
    const enemies: { enemy: Enemy; enemyPosition: EnemyPosition }[] = []

    for (let row = 0; row < enemyRows.length; row++) {
      for (let i = 0; i < 11; i++) {
        const enemyId = uniqueIdGenerator('enemies')
        enemies.push({
          enemy: {
            [enemyId]: enemyRows[row],
          },
          enemyPosition: {
            [enemyId]: {
              x: 6 > i ? -1 * (i / 10) : (i - 5) / 10,
              y: row,
            },
          },
        })
      }
    }

    return enemies
  },
})

targetCreateEnemy.watch((enemies) => {
  enemies.map(({ enemy, enemyPosition }) => {
    addEnemy(enemy)
    addEnemyPosition(enemyPosition)
  })
})
