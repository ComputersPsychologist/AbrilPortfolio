import styles from "./SectionAbout.module.css";
import MotionlessCarousel from "../MotionlessCarousel/MotionlessCarousel";

export default function SectionAbout() {

  let images = []

  images = ['/static1.jpg', '/static2.jpg', '/static3.jpg']

  return (
    <section className={styles.about} id='holaloko'>
      <div className={styles.titleCont}>
        <h3>I AM ABRIL WAINSTEIN,</h3>
        <h3 className={styles.h3b}>A.K.A ABRU.</h3>
        <h3>BORN IN B.A,</h3>
        <h3 className={styles.h3b}>LIVING IN B.A, ARG.</h3>
      </div>
      <div className={styles.aboutContent}>
        <MotionlessCarousel 
          photos={images} 
          interval={500}
        />
        <div className={styles.description}>
          <p>
            Currenly a model and artist based in Palermo district. Buenos Aires, Argentina.
          </p>
          <p>
            I'm known for my work in the fashion industry and have been featured in
            several magazines and publications.
            Currently working on a new collection of paintings that will be released in 2024.
          </p>
          <p>
            Percibe myself as a talented artist and have exhibited my work in galleries around the world.
            Currently working on a new collection of paintings that will be released in 2024.
          </p>
          <p>
            Currently working on a new collection of paintings that will be released in 2024.
          </p>
        </div>
      </div>
      <div className={styles.cvButton}>
        <span>VIEW CV</span>
        <img src="/eye.svg"></img>
      </div>
    </section>
  )
}