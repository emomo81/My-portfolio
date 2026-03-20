import Spline from '@splinetool/react-spline/next';
import { Suspense } from "react";

export default function ProjectsBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-96 opacity-40 pointer-events-none">
      <Suspense fallback={<div className="w-full h-full bg-background animate-pulse" />}>
        <Spline 
          scene="https://prod.spline.design/TMQq1r9Hw5iBrZSf/scene.splinecode" 
        />
      </Suspense>
    </div>
  );
}
