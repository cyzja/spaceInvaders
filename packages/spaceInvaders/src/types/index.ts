export interface EnemyPosition {
  [enemyId: string]: {
    x: number
    y: number
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
