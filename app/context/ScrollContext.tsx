"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  ReactNode,
  useState,
} from "react";
import Lenis from "lenis";

interface ScrollContextProps {
  lenis: Lenis | null;
}

const ScrollContext = createContext<ScrollContextProps>({ lenis: null });

export const useScroll = (): ScrollContextProps => useContext(ScrollContext);

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      smoothWheel: true,
      lerp: 0.1,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    setLenis(lenisInstance);

    const onAnimationFrame = (time: number) => {
      lenisInstance.raf(time);
    };

    const frame = (time: number) => {
      onAnimationFrame(time);
      requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);

    return () => {
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ lenis }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContext;
