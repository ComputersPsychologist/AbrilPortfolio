'use client'
import styles from './Cursor.module.css'
import useMice from '@/hooks/useMice'

export default function Cursor() {

  const { mice, cursorStyle } = useMice(styles)
  
  return <div className={mice} style={cursorStyle} />
  
}