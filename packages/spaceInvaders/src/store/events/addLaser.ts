import { createEvent } from 'effector'

import { LaserType } from '../../types'

export const addLaser = createEvent<LaserType | undefined>()
