import styles from './Button.module.css'
interface IButton {
  isDisabled: boolean
  children: React.ReactNode
  onClick: (e: any) => void
}

const Button = ({isDisabled, children, onClick}: IButton) => {
  return (
    <button disabled={isDisabled} onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}

export default Button