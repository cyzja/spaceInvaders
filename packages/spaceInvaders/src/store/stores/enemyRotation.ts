import { createStore } from 'effector'

import { changeEnemyRotation, clearEnemyGroup } from '../events'

export const $enemyRotation = createStore<[x: number, y: number, z: number]>([0, 0, 0])
  .on(changeEnemyRotation, (_, v) => [v, 0, v])

  .reset([clearEnemyGroup])
