'use client'
import { useState } from "react";
import Image from "next/image";
import styles from "./Nav.module.css";
import tip from '../../../public/rectangle2.svg'

export default function Nav() {

  const [isVisible, setIsVisible] = useState(false)

  return (

    <nav className={`${styles.nav} ${isVisible && styles.navIsVisible}`} 
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
    
      <div> 
        <div className={styles.linksCont}>
          <a className={styles.a}>ABRIL W.</a>
          <a className={styles.a}>PORTFOLIO</a>
          <a className={styles.a}>CONTACT</a>
        </div>
      </div>

      <div className={styles.tipCont}>
        <Image 
          src={tip} 
          className={styles.tip}
        />
      </div>

    </nav>
  )

}
