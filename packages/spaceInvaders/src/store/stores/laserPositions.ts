import { createStore, sample } from 'effector'
import * as THREE from 'three'

import { LASER_MAX_DISTANCE } from '../../constants'
import uniqueIdGenerator from '../../helper/uniqueIdGenerator'
import { LaserPosition } from '../../types'
import { addLaser, changeLaserPotions, killLaser } from '../events'
import { $playerPosition } from './playerPosition'

export const $laserPositions = createStore<LaserPosition>({})
  .on(changeLaserPotions, (store, v) => {
    Object.keys(store).map((laserId) => {
      const laser = store[laserId]
      if (laser.position.y < LASER_MAX_DISTANCE) {
        //console.log('changeLaserPotions', laser.position[1] + v)
        laser.position = new THREE.Vector3(laser.position.x, laser.position.y + v, laser.position.z)
      } else {
        delete store[laserId]
      }
    })
    return { ...store }
  })
  .on(killLaser, (store, v) => {
    delete store[v]
    return { ...store }
  })

sample({
  clock: addLaser,
  source: [$laserPositions, $playerPosition],
  fn: ([laserPositions, playerPosition]) => {
    return {
      ...laserPositions,
      ...{
        [uniqueIdGenerator('laser')]: {
          position: playerPosition,
          //type: addLaser,
        },
      },
    } as LaserPosition
  },
  target: $laserPositions,
})
