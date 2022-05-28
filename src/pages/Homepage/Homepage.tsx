import logoAcademy from '../../images/logoAcademy.svg'
import logoCourse from '../../images/logoCourse.png'
import styles from './Homepage.module.css'

const Homepage = () => {
  return (
    <>
      <h2 className={styles.title}>Welcome to the page</h2>
      <p className={styles.desc}>This page was created during the FrontEnd 4 Beginners course as one of the homework assignments.</p>
      <div className={styles.containerLogo}>
        <img src={logoAcademy} alt="" className={styles.logo} />
        <img src={logoCourse} alt="" className={styles.logo} />
      </div>
    </>
  )
}

export default Homepage