import Image from 'next/image';
import { easeInOut, motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

function Modal({ projects, modal, cursorPosition, mouse }: any) {
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.3 };

  const { active, index } = modal;
  const transform = index * -100;

  const springX = useSpring(0, smoothOptions);
  const springY = useSpring(0, smoothOptions);

  const viewX=useSpring(0, smoothOptions);
  const viewY=useSpring(0, smoothOptions);

  useEffect(() => {
    springX.set(cursorPosition.x-200);
    springY.set(cursorPosition.y-142);

    viewX.set(cursorPosition.x-30);
    viewY.set(cursorPosition.y-30)
  }, [cursorPosition]);
console.log(springX)
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        exit="closed"
        transition={{
          delay: 0.1,
          type: "spring",
          ease: [0.76, 0, 0.24, 1],
          damping: 20,
          stiffness: 200
        }}
        animate={{ scale: active ? 1 : 0 }}
        style={{
          top: springY,
          left: springX,
          position: "absolute",
          transform: "translate(-50%, -50%)"
        }}
        className="w-[400px] h-[284px] absolute overflow-hidden pointer-events-none"
      >
        {projects.map((project: any, index: number) => {
          const { src, color } = project;
          return (
            <div
              key={index}
              className={`px-6 py-8`}
              style={{
                background: color,
                transform: `translateY(${transform}%)`,
                transition: active ? "0.5s" : "none"
              }}
            >
              <Image
                alt="image"
                src={src}
                width={400}
                height={400}
                className="w-full h-full aspect-[16/10]"
              />
            </div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        exit="closed"
        transition={{
          delay: 0.1,
          type: "spring",
          ease: [0.76, 0, 0.24, 1],
          damping: 20,
          stiffness: 200
        }}
        animate={{ scale: active ? 1 : 0 }}
        className={clsx(
          `absolute z-60 w-[60px] h-[60px] text-white rounded-full bg-blue-500 flex justify-center items-center pointer-events-none`,
          active ? "absolute pointer-events-none" : "hidden pointer-events-none"
        )}
        style={{
          top: viewY,
          left: viewX,
          position: "absolute",
          transform: "translate(-50%, -50%)"
        }}
      >
        View
      </motion.div>
    </>
  );
}

export default Modal;
