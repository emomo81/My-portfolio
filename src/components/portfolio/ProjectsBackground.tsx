
"use client";

import { Suspense, lazy, useRef } from "react";
import { useInView } from "framer-motion";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function ProjectsBackground() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });

  return (
    <div ref={ref} className="absolute top-0 left-0 w-full h-96 opacity-40 pointer-events-none">
      {isInView && (
        <Suspense fallback={<div className="w-full h-full bg-background animate-pulse" />}>
          <Spline 
            scene="https://prod.spline.design/TMQq1r9Hw5iBrZSf/scene.splinecode" 
          />
        </Suspense>
      )}
    </div>
  );
}
