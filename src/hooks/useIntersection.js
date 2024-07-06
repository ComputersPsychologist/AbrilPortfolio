import { useEffect, useRef, useState } from "react";

export default function useIntersection (options = {}) {
  
  const [isIntersecting, setIsIntersecting] = useState(false)
  const elementRef = useRef()

  useEffect(() => {
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          console.log('intersecting');
          setIsIntersecting(true)
        }
      })
    }, options)

    if(elementRef.current)
    observer.observe(elementRef.current)

    return () => {
      if(elementRef.current)
      observer.unobserve(elementRef.current)
    }
  }, [])

  return [elementRef, isIntersecting]

}