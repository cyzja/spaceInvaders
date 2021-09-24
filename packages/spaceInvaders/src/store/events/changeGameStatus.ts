import { createEvent } from 'effector'

import { GameStatus } from '../../types'

export const changeGameStatus = createEvent<GameStatus>()
