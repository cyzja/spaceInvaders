import { createStore, sample } from 'effector'
import * as THREE from 'three'

import { LASER_MAX_DISTANCE } from '../../constants'
import uniqueIdGenerator from '../../helper/uniqueIdGenerator'
import { LaserPosition } from '../../types'
import { addEnemyLaser, changeLaserEnemyPotions, killEnemyLaser } from '../events'
import { $enemy } from './enemy'
import { $enemyPosition } from './enemyPosition'

export const $laserEnemyPositions = createStore<LaserPosition>({})
  .on(changeLaserEnemyPotions, (store, v) => {
    Object.keys(store).map((laserId) => {
      const laser = store[laserId]

      if (laser.position.y > -LASER_MAX_DISTANCE) {
        //console.log('changeLaserPotions', laser.position[1] + v)
        laser.position = new THREE.Vector3(laser.position.x, laser.position.y - v, laser.position.z)
      } else {
        delete store[laserId]
      }
    })
    return { ...store }
  })
  .on(killEnemyLaser, (store, v) => {
    delete store[v]
    return { ...store }
  })

sample({
  clock: addEnemyLaser,
  source: [$laserEnemyPositions, $enemyPosition, $enemy],
  fn: ([laserPositions, enemyPosition, enemy], addEnemyLaser) => {
    const liveEnemy = Object.keys(enemy).filter((enemyId) => !enemy[enemyId].isKill)
    const shutEnemyId = liveEnemy[Math.round(Math.random() * liveEnemy.length)]
    return {
      ...laserPositions,
      ...{
        [uniqueIdGenerator('laserEnemy')]: {
          position: enemyPosition[shutEnemyId].position,
          type: addEnemyLaser,
        },
      },
    } as LaserPosition
  },
  target: $laserEnemyPositions,
})
