'use client'
import useIntersection from '@/hooks/useIntersection'
import styles from './SectionPW.module.css'

const articles = [
  { title: 'Tenessee', img: '/abril2.jpg' },
  { title: 'Oklahoma', img: '/abril2.jpg' },
  { title: 'New York', img: '/abril2.jpg' },
  { title: 'Buenos Aires', img: '/abril2.jpg' },
]

export default function SectionPW() {

  const [elementRef, isIntersecting] = useIntersection({
    threshold: 0.5
  })

  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>PORTFOLIO & WORK</h2>
      <div className={styles.gridBook} >
        {
          articles.map((item, index) => (
            <article 
              key={index} 
              className={styles.article}
            >
              <img src={item.img} />
              <a>{item.title}</a>
            </article>
          ))
        }
      </div>
    </section>
  )
}