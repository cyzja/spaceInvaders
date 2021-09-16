import { createEvent } from 'effector'

import { Enemy } from '../../types'

export const addEnemy = createEvent<Enemy>()
