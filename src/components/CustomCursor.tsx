"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth out the movement using spring physics for the outer ring
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    const handleLinkHover = () => setHovered(true);
    const handleLinkLeave = () => setHovered(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    const interactiveElements = document.querySelectorAll("a, button, input, select, .cursor-hover");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleLinkHover);
      el.addEventListener("mouseleave", handleLinkLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleLinkHover);
        el.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, [hidden, mouseX, mouseY]);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (pointer: fine) {
          body, a, button, input, select {
            cursor: none;
          }
        }
      `}} />
      
      {/* Inner Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: hovered ? 0 : 1,
        }}
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference hidden md:block transition-opacity duration-300 ${
          hidden ? "opacity-0" : "opacity-100"
        }`}
      />
      
      {/* Outer Ring / Blob */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: hovered ? 3 : 1,
          backgroundColor: hovered ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-white pointer-events-none z-[9999] mix-blend-difference hidden md:block transition-opacity duration-300 ${
          hidden ? "opacity-0" : "opacity-100"
        }`}
      />
    </>
  );
}
