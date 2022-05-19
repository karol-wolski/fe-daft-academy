import styles from './Input.module.css'

interface IInput {
  id: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

const Input = ({id, onChange, value}: IInput) => {
  return (
    <input id={id} type="text" value={value} onChange={onChange} className={styles.input} />
    )
}

export default Input