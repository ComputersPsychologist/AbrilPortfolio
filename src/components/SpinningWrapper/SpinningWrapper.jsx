import styles from './SpinningWrapper.module.css'

export default function SpinningWrapper({ text, children }) {
  
  const length = text.length
  const deg = 360 / length
  
  return (

    <div className={styles.spinningTextWrapper}>

      <div className={styles.spinningText}>
        <p>{text.split("").map((char, i) => (
          <span
            key={i}
            style={{
              transform: `rotate(${deg * i}deg)`
            }} 
          >
          {char}
          </span>
        ))}</p>
      </div>
      <div className={styles.innerCircle}>
        {children}
      </div>
    </div>
  )
}