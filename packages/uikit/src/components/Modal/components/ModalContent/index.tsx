import React, { memo } from 'react'

import styles from './styles.module.css'

interface ModalContentProps {
  children: React.ReactNode
}

const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
  const handleClick = (e: React.SyntheticEvent) => e.stopPropagation()

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div onClick={handleClick} onKeyPress={handleClick} className={styles.modalContent}>
      {children}
    </div>
  )
}

export default memo(ModalContent)
