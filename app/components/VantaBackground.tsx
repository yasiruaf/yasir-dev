"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

const VantaBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    // Function to check if scripts are loaded
    const checkScripts = () => {
      return (
        typeof window !== "undefined" &&
        window.THREE &&
        window.VANTA &&
        window.VANTA.NET
      );
    };

    // Initialize Vanta effect
    const initVanta = () => {
      if (vantaRef.current && !vantaEffect.current) {
        try {
          vantaEffect.current = window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x16f2b3, // Using your theme's accent color
            backgroundColor: 0x0d1224, // Using your current background color
            points: 10.0,
            maxDistance: 18.0,
            spacing: 16.0,
          });
          //   console.log('Vanta NET effect initialized successfully');
        } catch (error) {
          console.error("Error initializing Vanta effect:", error);
        }
      }
    };

    // Check if scripts are already loaded
    if (checkScripts()) {
      setScriptsLoaded(true);
      initVanta();
    } else {
      // Wait for scripts to load with longer timeout and more frequent checks
      let attempts = 0;
      const maxAttempts = 100; // 10 seconds with 100ms intervals

      const scriptCheckInterval = setInterval(() => {
        attempts++;

        if (checkScripts()) {
          clearInterval(scriptCheckInterval);
          setScriptsLoaded(true);
          // Small delay to ensure DOM is ready
          setTimeout(initVanta, 100);
        } else if (attempts >= maxAttempts) {
          clearInterval(scriptCheckInterval);
          console.error("Vanta scripts failed to load after 10 seconds");
        }
      }, 100);

      return () => {
        clearInterval(scriptCheckInterval);
      };
    }

    return () => {
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
          vantaEffect.current = null;
        } catch (error) {
          console.error("Error destroying Vanta effect:", error);
        }
      }
    };
  }, []);

  return (
    <>
      <div
        ref={vantaRef}
        className="fixed inset-0 z-[-2] h-[150vh] md:h-[170vh] w-screen"
        style={{
          background: scriptsLoaded ? "transparent" : "#0d1224", // Fallback background
        }}
      />
      {/* Light overlay to balance Vanta with glass effects */}
      <div
        className="fixed inset-0 z-[-1]"
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
          background: "rgba(13, 18, 36, 0.75)",
          pointerEvents: "none",
        }}
      />
    </>
  );
};

export default VantaBackground;
