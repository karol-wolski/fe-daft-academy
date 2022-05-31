import Navigation from "../Navigation/Navigation"
import styles from './Header.module.css'
import Logo from '../../images/logo.png'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link to="/">
          <img src={Logo} alt="logo" className={styles.header__logo} />
        </Link>
        <Navigation />
      </div>
    </header>
  )
}

export default Header