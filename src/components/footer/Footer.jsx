import styles from "./Footer.module.css"

export default function Footer () {
  return (
    <footer className={styles.footer} id="footer">
        <p>
          If you have a <strong>General</strong> or <strong>Project</strong> enquiry,
          please drop me an email - AVAILABLE NOW.
        </p>
        <div className={styles.imgCont}>
          <img className={styles.imgArrow} src="/arrow.svg" alt="arrow icon up" />
          <img className={styles.imgArrow2} src="/arrow.svg" alt="arrow icon down" />
        </div>
        <h2>SEND AN EMAIL</h2>
    </footer>
  )
}