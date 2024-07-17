import styles from "./SectionPortfolio.module.css";
import Marquee from "@/components/Marquee/Marquee";
import useIntersection from "@/hooks/useIntersection";
import useMarquee from "@/hooks/useMarquee";
import SpinningWrapper from "@/components/SpinningWrapper/SpinningWrapper"

export default function SectionPortfolio () {
  
  const { backwardStyle } = useMarquee({duration: 5})
  const [elementRef, isIntersecting] = useIntersection({treshold: 0.5})
  
  return (
    <section 
      ref={elementRef}
      className={`${styles.section} ${isIntersecting ? styles.inView : ''}`}
    >
      <Marquee
        text={`PERSONAL PORTFOLIO · `} 
        direction={backwardStyle}
        treshold={0.1}
      />
      <div className={styles.imgCont}>
        <SpinningWrapper text={"THIS IS - ABRIL PORFOLIO - THIS IS ABRIL PORFOLIO - "}>
          <img src="/eye.gif" alt="" />
        </SpinningWrapper>
      </div>

    </section>
  )
}