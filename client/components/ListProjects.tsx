import Link from "next/link";
import { getProjects } from "../api/projects";
import { useEffect, useState } from "react";

export default function ListProjects() {
  const [projects, setProjects] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const projects = await getProjects();
      setProjects(projects);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Projects</h1>
      <Link href="/">Home</Link>

      {projects.map((project: any) => (
        <div key={project.id}>
          <Link href={`/projects/${project.id}`}>
            {project.name}
          </Link>
        </div>
      ))}
    </>
  );
}
