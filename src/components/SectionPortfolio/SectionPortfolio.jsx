import styles from "./SectionPortfolio.module.css";
import Marquee from "@/components/Marquee/Marquee";
import useMarquee from "@/hooks/useMarquee";

export default function SectionPortfolio () {
  
  const { backwardStyle } = useMarquee()
  
  return (
    <section className={styles.section}>
      <Marquee
        text={`PERSONAL PORTFOLIO · `} 
        direction={backwardStyle}
        treshold={0.1}
      />
      <div className={styles.imgCont}>

      </div>

    </section>
  )
}