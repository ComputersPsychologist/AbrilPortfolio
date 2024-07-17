import styles from "./MouseTracker.module.css"
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function MouseTracker({children}) {
  
    const x = useMotionValue(200);
    const y = useMotionValue(200);

    const rotateX = useTransform(y, [0, 900], [45, -45]);
    const rotateY = useTransform(x, [0, 400], [-45, 45]);

    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    return (
      <motion.div 
        style={{
          width: "65%",
          height: "65%",
          borderRadius: 30,
          backgroundColor: "#fff",
          rotateX,
          rotateY
        }}
      >
        {children}
  
      </motion.div>
    )
}
