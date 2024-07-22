import { useState, useEffect } from "react"

const useMice = (styles) => {

  const [mousePosition, setMousePosition] = useState({ x: '50%', y: '50%' })
  const [mice, setMice] = useState(styles.cursor)
  
  const cursorStyle = {
    top: mousePosition.y,
    left: mousePosition.x,
  }
  
  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }
    const handleMouseDown = () => setMice(styles.click)
    const handleMouseUp = () => setMice(styles.cursor)
  
    document.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    
    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])
  
  useEffect(() => {
    
    const handleHover = (event) => {
      setMice(event.type === 'mouseenter' ? styles.hover : styles.cursor)
    }
    const anchorElements = document.querySelectorAll('a')
    
    anchorElements.forEach((element) => {
      element.addEventListener('mouseenter', handleHover)
      element.addEventListener('mouseleave', handleHover)
    })

    return () => {
      anchorElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleHover)
        element.removeEventListener('mouseleave', handleHover)
      })
    }
  }, [])

  return { mousePosition, mice, cursorStyle }
}

export default useMice