import React from 'react';
import {Scene} from '@monorepo/spaceInvaders'
import styles from './styles.module.css'

const SpaceInvadersWrapper = () => {
  return (
    <div className={styles.wrapper}>
        <Scene />
    </div>
  );
}

export default SpaceInvadersWrapper
