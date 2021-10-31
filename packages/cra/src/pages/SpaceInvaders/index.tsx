import React from 'react'
import { Scene } from '@monorepo/spaceInvaders'
import styles from './styles.module.css'

const SpaceInvaders: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Scene />
    </div>
  )
}

export default SpaceInvaders
