import React, { memo } from 'react'
import styles from './styles.module.css'
import { Button } from '@monorepo/uikit'
interface MenuItemProps {
  label: string
  action?: () => void
}

const MenuItem: React.FC<MenuItemProps> = ({ label, action }) => {
  return (
    <div className={styles.menuItemWrapper}>
      <Button className={styles.menuItem} onClick={action}>
        {label}
      </Button>
    </div>
  )
}

export default memo(MenuItem)
