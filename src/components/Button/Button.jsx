import clsx from 'clsx'
import styles from './Button.module.css'

const Button = ({ children, variant, size }) => {
  const classnames = clsx(
    styles.base,
    variant === 'warning' && styles.warning,
    variant === 'error' && styles.error,
    size === 'small' && styles.sm,
  )
  return <button className={classnames}>{children}</button>
}

export default Button
