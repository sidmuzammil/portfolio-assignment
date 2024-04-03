







import { useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity
} from "framer-motion";

const getScale = (velX, velY) => {
  const distance = Math.sqrt(velX ** 2 + velY ** 2);
  return Math.min(distance / 3000, 0.35);
};

const getAngle = (velX, velY) => {
  return (Math.atan2(velY, velX) * 180) / Math.PI;
};

export default function MouseFollower() {
  const [cursorType, setCursorType] = useState("default");
  const springConfig = { mass: 0.2, stiffness: 100 };

  const pointX = useMotionValue(0);
  const pointY = useMotionValue(0);

  const pointTransform = useMotionTemplate`
    translate(-50%, -50%)
    translate(${pointX}px, ${pointY}px)
  `;

  const stickyTailX = useMotionValue(200);
  const stickyTailY = useMotionValue(0);

  const tailX = useSpring(
    cursorType === "default" ? pointX : stickyTailX,
    springConfig
  );
  const tailY = useSpring(
    cursorType === "default" ? pointY : stickyTailY,
    springConfig
  );
  const xVelocity = useVelocity(tailX);
  const yVelocity = useVelocity(tailY);

  const rotate = useTransform([xVelocity, yVelocity], ([lastX, lastY]) =>
    getAngle(lastX, lastY)
  );
  const scale = useTransform([xVelocity, yVelocity], ([lastX, lastY]) =>
    getScale(lastX, lastY)
  );


  const tailTransform = useMotionTemplate`
    translate(-50%, -50%)
    translate(${tailX}px, ${tailY}px)
    rotate(${rotate}deg)
 
  `;

  useEffect(() => {
    const updadeMousePosition = (event) => {
      pointX.set(event.clientX);
      pointY.set(event.clientY);
    };

    document.addEventListener("mousemove", updadeMousePosition);

    return () => {
      document.removeEventListener("mousemove", updadeMousePosition);
    };
  }, []);

  return (
    <div className="box">
      <motion.div
        className="fixed top-0 left-0 pointer-events-none w-[10px] h-[10px] rounded-full border-2  border-green-400 z-[99]"
        style={{ transform: pointTransform }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none w-[50px] h-[50px] rounded-full border-2 border-green-500 z-[99]"
        style={{ transform: tailTransform }}
      />
    </div>
  );
}













