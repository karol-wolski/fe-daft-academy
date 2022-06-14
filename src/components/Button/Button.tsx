import styles from './Button.module.css'
interface IButton {
  isDisabled?: boolean
  children: React.ReactNode
  onClick: (e: any) => void
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({isDisabled, children, onClick, type = "button"}: IButton) => {
  return (
    <button disabled={isDisabled} onClick={onClick} className={styles.button} type={type}>
      {children}
    </button>
  )
}

export default Button