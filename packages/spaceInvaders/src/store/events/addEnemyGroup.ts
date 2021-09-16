import { createEvent } from 'effector'

import { EnemyProps } from '../../types'

export const addEnemyGroup = createEvent<EnemyProps[]>()
