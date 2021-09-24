import { createStore } from 'effector'

import { GameStatus } from '../../types'
import { changeGameStatus } from '../events'

export const $gameStatus = createStore<GameStatus>(GameStatus.Play).on(
  changeGameStatus,
  (state, value) => value,
)
