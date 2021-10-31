import { Button, Input } from '@monorepo/uikit'
import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router'
import { routeList } from '../../../../components/Router'
import styles from './styles.module.css'

const UserNameForm: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isNameError, setIsNameError] = useState(false)
  const history = useHistory()

  const handleStart = () => {
    const isNameValid = /^.{3,}$/.test(inputRef.current?.value || '')
    if (isNameValid) {
      history.push(routeList.spaceInvaders.basePath)
      return
    }

    setIsNameError(true)
  }

  return (
    <div className={styles.userNameFormWrapper}>
      <Input ref={inputRef} status={isNameError ? 'error' : 'valid'} />
      <Button color={'primary'} onClick={handleStart}>
        {' '}
        Start
      </Button>
    </div>
  )
}

export default UserNameForm
