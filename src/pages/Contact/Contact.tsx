import FBLogo from '../../images/fb.svg'
import TwitterLogo from '../../images/twitter.svg'
import LinkedInLogo from '../../images/linkedin.svg'
import ContactImage from '../../images/Contact.jpg'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <>
      <h2 className='title'>Stay in touch</h2>
      
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <a href="http://facebook.com" className={styles.list__link}>
              <img src={FBLogo} alt="Logo facebook" className={styles.list__logo} />
              username
            </a>
          </li>
          <li className={styles.list__item}>
            <a href="http://twitter.com" className={styles.list__link}>
              <img src={TwitterLogo} alt="Logo twitter" className={styles.list__logo} />
              username
            </a>
          </li>
          <li className={styles.list__item}>
            <a href="http://linkedin.com" className={styles.list__link}>
              <img src={LinkedInLogo} alt="Logo linkedin" className={styles.list__logo} />
              username
            </a>
          </li>
        </ul>
        <img src={ContactImage} alt="" className={styles.image} />
      </div>

    </>
  )
}

export default Contact