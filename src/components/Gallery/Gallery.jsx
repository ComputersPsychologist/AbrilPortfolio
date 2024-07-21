'use client'
import styles from "./Gallery.module.css"
import GalleryModal from "./Modal/GalleryModal"
import { useState } from "react"

export default function Gallery ({images, title}) {

  const [visible, setVisible] = useState(false)
  const [img4Modal, setImg4Modal] = useState({})

  const handleClick = (image) => {
    setVisible(true)
    setImg4Modal(image)
  }

  return (
      <main className={styles.main}>
        <div className={styles.titleCont}>
          <img className={styles.arab} src="/arab1.png" alt="" />
          <h1>{title}</h1>
          <img className={styles.arab} src="/arab2.png" alt="" />
        </div>
        <div className={styles.galleryContainer}>
          {
            images.map(image => (
              <div onClick={() => handleClick(image)} className={styles.galleryItem} key={image.title}>
                <img  src={image.url} alt={image.title} className={styles.galleryImg} />
                <h2 className={styles.galleryTitle}>{image.title}</h2>
              </div>
            ))
          }
        </div>

        <GalleryModal 
          img={img4Modal} 
          visible={visible} 
          setVisible={setVisible}
        />
      </main>
  )
}