
import Spline from '@splinetool/react-spline/next';
import { Suspense } from "react";
import ProjectsClient from "./ProjectsClient";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-96 opacity-40 pointer-events-none">
        <Suspense fallback={<div className="w-full h-full bg-background animate-pulse" />}>
          <Spline scene="https://prod.spline.design/TMQq1r9Hw5iBrZSf/scene.splinecode" />
        </Suspense>
      </div>

      <ProjectsClient />
    </section>
  );
}
