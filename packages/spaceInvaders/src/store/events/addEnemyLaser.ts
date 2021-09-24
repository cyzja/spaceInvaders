import { createEvent } from 'effector'

import { LaserType } from '../../types'

export const addEnemyLaser = createEvent<LaserType | undefined>()
