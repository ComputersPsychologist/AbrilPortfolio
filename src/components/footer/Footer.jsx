import useIntersection from "@/hooks/useIntersection"
import styles from "./Footer.module.css"
import { useRef, useState } from "react"

export default function Footer ({mail, face, insta, linked}) {

  const data = {
    email: `mailto:${mail}?subject=Hello%20Abril%20-%20Website%20Form"`,
    fb: `https://www.facebook.com/${face = ''}`,
    ig: `https://www.instagram.com/${insta = ''}`,
    linkedin: `https://www.linkedin.com/${linked = ''}`
  }

  const [elementRef, isIntersecting] = useIntersection()

  return (
    <footer className={`${styles.footer} ${isIntersecting ? styles.inView : '' }`} ref={elementRef} id="footer">
        <div className={styles.emailCont}>
          <p>
            If you have a <strong>General</strong> or <strong>Project</strong> enquiry,
            please drop me an email - <strong>AVAILABLE NOW.</strong>
          </p>
          <div className={styles.imgCont}>
            <img className={styles.imgArrow} src="/arrow.svg" alt="arrow icon up" />
            <img className={styles.imgArrow2} src="/arrow.svg" alt="arrow icon down" />
          </div>
          <a href={data.email}>
            <h2>SEND AN EMAIL</h2>
          </a>
        </div>
        <div className={styles.credits}>
          <div>
            <a href={data.ig}><span>INSTAGRAM</span></a>  
            <a href={data.fb}><span>FACEBOOK</span></a>
            <a href={data.linkedin}><span>LINKDEIN</span></a>
          </div>
          <div>ABRIL <br />WAINSTEIN ® 2024</div>
          <div className={styles.webDev}>WEB DEVELOPER</div>
        </div>
    </footer>
  )
}