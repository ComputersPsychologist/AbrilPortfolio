import { useState, useEffect } from "react";
import useScroll from "./useScrollPos";


// duration unit: seconds.
export default function useMarquee({duration = 2}) {

  const speed = 200
  const { positionY } = useScroll()
  const [forwardStyle, setForwardStyle] = useState({});
  const [backwardStyle, setBackwardStyle] = useState({});
  
  const template = {
    fwd: {
      'left': `${positionY}px`,
      'transition': `cubic-bezier(0,0.57,0.56,1) ${duration}s` 
    },
    back: {
      'right': `${positionY}px`,
      'transition': `cubic-bezier(0,0.57,0.56,1) ${duration}s` 
    }
  }
  useEffect(() => {
    setForwardStyle(template.fwd)
    setBackwardStyle(template.back)
  }, [positionY]);
  
  return { forwardStyle, backwardStyle }
}