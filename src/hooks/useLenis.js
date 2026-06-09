import { useEffect } from "react";
import Lenis from "lenis";

let lenisInstance = null;

export function getLenis() {
  return lenisInstance;
}

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    lenisInstance = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
}
