import React, { memo } from 'react'

import styles from './styles.module.css'

interface ModalOverlayProps {
  children: React.ReactNode
  isOverlayClose?: boolean
  handleCloseModal?: () => void
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({
  children,
  isOverlayClose = true,
  handleCloseModal,
}) => {
  const handleClick = () => (isOverlayClose && handleCloseModal ? handleCloseModal() : null)

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div onClick={handleClick} onKeyPress={handleClick} className={styles.modalOverlay}>
      {children}
    </div>
  )
}

export default memo(ModalOverlay)
