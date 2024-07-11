import { useEffect, useState } from "react";

export default function useScroll() {

  const [positionY, setPositionY] = useState(0)
  
  const handleScroll = () => {
    setPositionY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  // console.log(positionY)

  return { positionY };
}

