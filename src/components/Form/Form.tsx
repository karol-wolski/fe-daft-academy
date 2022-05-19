import { ChangeEvent, useEffect, useState } from "react"
import Button from "../Button/Button"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import Input from "../Input/Input"
import styles from './Form.module.css'

const LS_INPUT_KEY = 'inputValue'

const Form = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleSubmitButtonClick = (e: Event) => {
    e.preventDefault()
    localStorage.setItem(LS_INPUT_KEY, inputValue)
  }

  useEffect(() => {
    const getDataFromLS = localStorage.getItem(LS_INPUT_KEY)
    if (getDataFromLS) setInputValue(getDataFromLS)
  }, [])

  const inputValidation = (text: string) => {
    const inputValueLength = text.length
    let isError = false
    if (!/^[a-zA-Z]+$/.test(text)) {
      setErrorMessage('The name can contain only letters.')
      isError = true
    }
    if (inputValueLength < 3) {
      setErrorMessage('The length of the name should be greater than 3 characters.')
      isError = true
    } 
    if (inputValueLength > 20) {
      setErrorMessage('The length of the name should be less then 20 characters.')
      isError = true
    } 
    if (!isError) {
      setErrorMessage('')
    }
    isError ? setIsDisabled(true) : setIsDisabled(false)
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value: inputText} = e.target
    setInputValue(inputText)
    inputValidation(inputText)
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="textInput">Write your name below</label>
        <Input id="textInput" value={inputValue} onChange={(e) => handleOnChange(e)} />
        <Button isDisabled={isDisabled} onClick={(e) => handleSubmitButtonClick(e)}>Save</Button>
        {
          errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>
        }
      </form>
    </div>
  )
}

export default Form