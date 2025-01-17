import styles from './SpinningWrapper.module.css';
import { motion, useMotionValue, useTransform, useMotionTemplate } from "framer-motion";
import { useRouter } from 'next/navigation';
import { useRef, useEffect, useState } from 'react';

export default function SpinningWrapper({ text, children }) {

  // Text spinning & Mouse tracking are nested
  // split them it's a waste of time 

  // Spinning ->
  const length = text.length;
  const deg = 360 / length;

  //MouseTracker ->

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [30, -30]);
  const rotateY = useTransform(x, [0, 400], [-30, 30]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  // Dynamic Shadow ->

  const circleRef = useRef(null);

  const shadowSizeX = useTransform(x, [0, 400], [10, 0]);
  const shadowSizeY = useTransform(y, [0, 400], [10, 0]);

  const dynamicShadow = useMotionTemplate(`${shadowSizeX}px ${shadowSizeY}px 0 3px #0505cc`);

  useEffect(() => {
    const updateShadow = () => {
      if (circleRef.current) {
        circleRef.current.style.boxShadow = dynamicShadow.get();
      }
    };
  
    updateShadow();
  }, [shadowSizeX, shadowSizeY]);

  // Shake + navigate transition ->

  const router = useRouter()
  
  const [clicked, click] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    click(true)
    setTimeout(() => {
      click(false)
      router.push('/porfolio')
    } , 700)
  }
  
  return (
    <motion.div
            className={`${styles.tracker} ${clicked ? styles.shake : ''}`}
            style={{
                width: "500px",
                height: "500px",
                display: "flex",
                placeItems: "center",
                placeContent: "center",
                borderRadius: "50%",
                perspective: 400,
                backgroundColor: "rgba(220, 220, 220, 0.196)"
                
            }}
            onMouseMove={handleMouse}
    >
      {/* Spinning Text */}
      <div className={styles.spinningTextWrapper}>
        <div className={styles.spinningText}>
          <p>{text.split("").map((char, i) => (
            <span
              key={i}
              style={{
                transform: `rotate(${deg * i}deg)`
              }} 
            >
            {char}
            </span>
          ))}</p>
        </div>

        {/* Mouse Tracking */}
      
        <motion.div
            ref={circleRef}
            className={`${styles.outterCircle} ${clicked ? styles.shake : ''}`}
            onClick={handleClick}
            style={{
              width: "65%",
              height: "65%",
              borderRadius: "50%",
              backgroundColor: "#fff",
              boxShadow: "0px 0px 0px 2px #0505cc",
              rotateX,
              rotateY
             }}
        >
          <div className={styles.innerCircle}>
              {children}
          </div>
        </motion.div>
        
      </div>

    </motion.div>

  )
}