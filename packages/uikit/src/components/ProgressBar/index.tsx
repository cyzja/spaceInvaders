import React, { memo } from 'react'

import styles from './styles.module.css'

interface ProgressBarProps {
  progress: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.progressbar} style={{ width: `${progress}%` }}>
        <div></div>
      </div>
    </div>
  )
}

export default memo(ProgressBar)
