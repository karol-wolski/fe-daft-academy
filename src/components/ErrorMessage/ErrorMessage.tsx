import styles from './ErrorMessage.module.css'

interface IErrorMessage {
  children: React.ReactNode
}

const ErrorMessage = ({children}: IErrorMessage) => {
  return (
    <p className={styles.error}>{children}</p>
  )
}

export default ErrorMessage