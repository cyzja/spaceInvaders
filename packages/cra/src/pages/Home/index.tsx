import React from 'react'
import { Scene } from '@monorepo/movie'
import styles from './styles.module.css'
import Menu from './components/Menu'

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Scene />
      <Menu />
    </div>
  )
}

export default Home
