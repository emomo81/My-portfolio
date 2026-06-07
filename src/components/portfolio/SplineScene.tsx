"use client";

import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: none), (pointer: coarse)").matches;
}

export default function SplineScene({
  scene,
  onLoad,
}: {
  scene: string;
  onLoad?: () => void;
}) {
  const [skip, setSkip] = useState(true); // safe default: don't render until we know

  useEffect(() => {
    // Skip Spline on touch/mobile — WebGL is too heavy and crashes most phones
    if (!isTouchDevice()) {
      setSkip(false);
    } else {
      // Let parent know we're "done" immediately so loaders don't block
      onLoad?.();
    }
  }, [onLoad]);

  if (skip) return null;

  return <Spline scene={scene} onLoad={onLoad} />;
}
