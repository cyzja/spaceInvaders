import React, { memo } from 'react'

import { CloseCircleIcon } from '@monorepo/icons'

import styles from './styles.module.css'

interface ModalHeaderProps {
  title?: string
  handleCloseModal?: () => void
  closeButtonId?: string
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ title, handleCloseModal, closeButtonId }) => (
  <div className={styles.modalHeader}>
    <div className={styles.title}>{title}</div>
    <CloseCircleIcon id={closeButtonId} className={styles.closeButton} onClick={handleCloseModal} />
  </div>
)

export default memo(ModalHeader)
