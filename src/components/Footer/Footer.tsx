import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>Created by <a href="http://github.com/karol-wolski" className={styles.footer__link}> Karol Wolski</a></footer>
  )
}

export default Footer