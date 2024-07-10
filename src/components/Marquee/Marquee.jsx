'use client'
import { useEffect, useState } from 'react';
import styles from './Marquee.module.css'
import useScroll from '@/hooks/useScrollPos';

export default function Marquee({text, direction}) {
  
  // not customizable, just an evil number
  const treshold = 0.07

  const { positionY } = useScroll()
  const [visibleText, setVisibleText] = useState(text)
  const [textCount, setTextCount] = useState(1)

  useEffect(() => {
    setTextCount(prevCount => prevCount + treshold)
    setVisibleText(text.repeat(textCount))
  },[positionY])

  return (
    <div className={styles.cont}>
      <p className={styles.text} style={direction}>
        {visibleText}
      </p>
    </div>
  )
}