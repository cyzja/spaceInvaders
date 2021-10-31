import React, { memo } from 'react'
import classNames from 'classnames'

import styles from './styles.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'second' | 'green'
  size?: 'large' | 'small'
  outline?: boolean
  isTransparent?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  color,
  size,
  outline,
  isTransparent,
  ...rest
}) => {
  const classes = classNames(
    styles.button,
    color && styles[color],
    size && styles[size],
    outline && styles.outline,
    isTransparent && styles.transparent,
    className,
  )
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}

export default memo(Button)
