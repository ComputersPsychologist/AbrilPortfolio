'use client'
import Image from "next/image"
import styles from "./MotionlessCarousel.module.css"
import { useState, useRef, useEffect } from "react"

export default function MotionlessCarousel({ photos, interval = 1000 }) {

  const [imageIndex, setImageIndex] = useState(0)
  const indexRef = useRef(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % photos.length
      setImageIndex(indexRef.current)
    }, interval)

    return () => clearInterval(intervalId)
  }, [photos, interval])

  return (
    <div className={styles.carousel}>
      {photos.map((photo, index) => (
        <Image
          key={index}
          src={photo}
          alt={'abril wainstein photo'}
          style={{ display: imageIndex === index ? 'block !important' : 'none !important' }}
          width={300}
          height={400}
        />
      ))}
    </div>
  )
}