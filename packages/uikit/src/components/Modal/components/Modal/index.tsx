import React, { memo } from 'react'

import ModalContent from '../ModalContent'
import ModalHeader from '../ModalHeader'
import ModalOverlay from '../ModalOverlay'
import Portal from '../Portal'

interface ModalProps {
  children: React.ReactNode
  isOpen?: boolean
  title?: string
  isOverlayClose?: boolean
  handleCloseModal?: () => void
  closeButtonId?: string
}

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  isOpen,
  isOverlayClose,
  handleCloseModal,
  closeButtonId,
}) => {
  if (!isOpen) return null

  return (
    <Portal>
      <ModalOverlay isOverlayClose={isOverlayClose} handleCloseModal={handleCloseModal}>
        <ModalContent>
          <ModalHeader
            title={title}
            handleCloseModal={handleCloseModal}
            closeButtonId={closeButtonId}
          />
          {children}
        </ModalContent>
      </ModalOverlay>
    </Portal>
  )
}

export default memo(Modal)
