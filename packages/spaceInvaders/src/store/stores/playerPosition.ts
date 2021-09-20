import { createStore } from 'effector'
import * as THREE from 'three'

import { changePlayerPotions } from '../events'

const initVal = new THREE.Vector3(0, -4.8, 0)

export const $playerPosition = createStore<THREE.Vector3>(initVal).on(
  changePlayerPotions,
  (position, v) => {
    position.setX(v)
    return position
  },
)
