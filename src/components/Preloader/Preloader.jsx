import styles from "./Preloader.module.css"

export default function Preloader() {

  return (
    <div className={styles.Preloader}>
      <div className={styles.mainCont}>  
        <div>
          <span style={{ "--i": "1" }}>A</span>
          <span style={{ "--i": "2" }}>W</span>
        </div>
        <div className={styles.dots}>
          <span style={{ "--i": "3" }}>.</span>
          <span style={{ "--i": "4" }}>.</span>
          <span style={{ "--i": "5" }}>.</span>
          <span style={{ "--i": "6" }}>.</span>
        </div>
      </div>
    </div>
  )
}