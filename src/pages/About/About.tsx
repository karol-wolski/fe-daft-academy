import styles from './About.module.css'

const About = () => {
  return (
    <>
      <h2 className="title">About</h2>
      <p className={styles.paragraph}>Go to the project repository: {' '}
        <a href="https://github.com/karol-wolski/fe-daft-academy" className={styles.link}>
           Click here
        </a>
      </p>
    </>
  )
}

export default About
