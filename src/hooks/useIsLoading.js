import { useState, useEffect } from "react";

export default function useIsLoading() {
  
  const [isLoading, setIsLoading] = useState(true);

  /*
    - window object isn't needed because
    useEffect runs after DOM loading "[]".
  */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1)

    return(() => clearTimeout(timer))
  }, []) 

  return { isLoading, setIsLoading }
}