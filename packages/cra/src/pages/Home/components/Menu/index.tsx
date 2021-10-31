import React, { useMemo, useState } from 'react'
import MenuItem from './components/MenuItem'
import styles from './styles.module.css'
import { Modal } from '@monorepo/uikit'
import UserNameForm from '../UserNameForm'

const Menu: React.FC = () => {
  const modalContent = useMemo(
    () => ({
      userName: { component: <UserNameForm />, title: 'User name' },
      bestScore: { component: UserNameForm, title: '' },
      about: { component: UserNameForm, title: '' },
    }),

    [],
  )

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalContentVal, setModalContentVal] = useState<keyof typeof modalContent>()

  const handleNewGame = () => {
    setModalIsOpen(true)
    setModalContentVal('userName')
  }

  const handleCloseModal = () => {
    setModalIsOpen(false)
    setModalContentVal(undefined)
  }

  return (
    <div className={styles.menuWrapper}>
      <Modal
        isOpen={modalIsOpen}
        handleCloseModal={handleCloseModal}
        title={modalContentVal ? modalContent[modalContentVal].title : ''}
      >
        {modalContentVal ? modalContent[modalContentVal].component : null}
      </Modal>
      <MenuItem action={handleNewGame} label="New game" />
      <MenuItem label="Best Score" />
      <MenuItem label="About" />
    </div>
  )
}

export default Menu
