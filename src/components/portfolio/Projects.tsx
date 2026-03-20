
import ProjectsClient from "./ProjectsClient";
import ProjectsBackground from "./ProjectsBackground";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-background relative overflow-hidden">
      <ProjectsBackground />
      <ProjectsClient />
    </section>
  );
}
