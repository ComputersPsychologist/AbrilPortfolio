'use client'
import useIntersection from '@/hooks/useIntersection'
import styles from './SectionPW.module.css'

export default function SectionPW({ articles }) {

  return (
    <section className={styles.section}>
      
      <h2 className={styles.h2}>PORTFOLIO & WORK</h2>

      <div className={styles.gridBook}>
        {articles.map((item, index) => {
          const [elementRef, isIntersecting] = useIntersection({
            threshold: 0.3
          });

          return (
            <article
              key={index}
              className={`${styles.article} ${isIntersecting ? styles.inView : ''}`}
              ref={elementRef}
            >
              <img src={item.img} />
              <a>{item.title}</a>
            </article>
          );
        })}
      </div>

    </section>
  );
}