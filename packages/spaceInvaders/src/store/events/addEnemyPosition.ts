import { createEvent } from 'effector'

import { EnemyPosition } from '../../types'

export const addEnemyPosition = createEvent<EnemyPosition>()
