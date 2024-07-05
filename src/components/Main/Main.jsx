import styles from "./Main.module.css"

export default function Main () {
    return (
      <main className={styles.main}>
      
        <h1>THIS IS ABRIL W. </h1>
        <h2>MODEL / ARTIST</h2>

        <a href="#holaloko">
          <div className={styles.contact}>
            <span>
              CONTACT
            </span>
          </div>
        </a>

        <div className={styles.data}>
          <span>BASED IN BA, ARGENTINA</span>
          <span>(2024), ABRIL WAINSTEIN</span>
        </div>

      </main>
    )
}