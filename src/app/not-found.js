
'use client'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'
import { useEffect } from 'react'

export default function NotFoundPage() {
	
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.back()
    }, 3000)

    return () => clearTimeout(timer)
  },[])
  
  return (
    <div className={`${styles.cont404} ${styles.fadeIn}`}>
      <h3 className={styles.fadeIn}>PAGE NOT FOUND</h3>
      <h3 className={styles.fadeIn}>˅</h3>
      <img src="/bongo-cat-96.png" alt="" />
    </div>
  )
}