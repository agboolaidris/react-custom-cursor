import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (ev: MouseEvent) => {
    setMousePosition({
      x: ev.clientX,
      y: ev.clientY,
    });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  const variants: Variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  return (
    <div className="App">
      <motion.div className="cursor" variants={variants} animate="default" />
    </div>
  );
}

export default App;
