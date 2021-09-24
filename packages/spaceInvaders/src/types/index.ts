import { Vector3 } from 'three'

export interface EnemyPosition {
  [enemyId: string]: {
    position: Vector3
  }
}

export interface Enemy {
  [enemyId: string]: EnemyProps
}

export interface EnemyProps {
  type: EnemyType
  isKill: boolean
}

export enum EnemyType {
  Boss = 'Boss',
  Solder = 'Solder',
  Sergeant = 'Sergeant',
}

export interface LaserPosition {
  [laserId: string]: {
    position: Vector3
    type?: LaserType
  }
}

export enum LaserType {
  Default = 'Default',
}

export interface PlayerPosition {
  position: Vector3
}

export enum GameStatus {
  Play = 'Play',
  Pause = 'Pause',
  GameOver = 'GameOver',
  Win = 'Win',
}
