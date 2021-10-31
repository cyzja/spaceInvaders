import React, { forwardRef, memo, useState } from 'react'
import classNames from 'classnames'

import { CloseCircleIcon } from '@monorepo/icons'

import styles from './styles.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactElement
  status?: 'valid' | 'error'
  helperText?: string
  helperTextId?: string
}

const Input = (
  {
    value,
    type,
    placeholder,
    icon,
    status,
    helperText,
    className,
    style,
    onFocus,
    onBlur,
    autoComplete = 'off',
    helperTextId,
    ...rest
  }: InputProps,
  ref: React.LegacyRef<HTMLInputElement>,
) => {
  const [focused, setFocused] = useState(false)
  const [isShowPassword, setShowPassword] = useState(false)
  const [inputType, setInputType] = useState(type)

  const isPassword = type === 'password'
  const isActive = focused || value

  const inputContainerClassNames = classNames([styles.inputContainer, className])
  const fieldsetClassNames = classNames([
    styles.fieldset,
    value && styles.withValue,
    isActive && placeholder && styles.withPlaceholder,
    focused && styles.focused,
    status && styles[status],
  ])
  const placeholderClassNames = classNames([
    styles.placeholder,
    icon && styles.withIcon,
    isActive && placeholder && styles.active,
  ])
  const inputClassNames = classNames([
    styles.input,
    icon && styles.withIcon,
    isPassword && styles.password,
    status && styles[status],
  ])
  const helperTextClassNames = classNames([styles.helperText, status && styles[status]])
  const iconClassNames = classNames([
    styles.icon,
    focused && styles.focused,
    status && styles[status],
  ])

  const onInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true)
    onFocus && onFocus(e)
  }

  const onInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false)
    onBlur && onBlur(e)
  }

  return (
    <div className={styles.container}>
      <div className={inputContainerClassNames} style={style}>
        <fieldset className={fieldsetClassNames}>
          {isActive && placeholder && <legend className={styles.legend}>{placeholder}</legend>}
        </fieldset>
        <label className={placeholderClassNames}>{placeholder}</label>
        <div className={styles.block}>
          {icon && <span className={iconClassNames}>{icon}</span>}
          <input
            ref={ref}
            className={inputClassNames}
            value={value}
            type={inputType}
            autoComplete={autoComplete}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            {...rest}
          />

          {status === 'error' && <CloseCircleIcon className={styles.errorIcon} />}
        </div>
      </div>
      {helperText && (
        <label className={helperTextClassNames} id={helperTextId}>
          {helperText}
        </label>
      )}
    </div>
  )
}

export default memo(forwardRef(Input))
