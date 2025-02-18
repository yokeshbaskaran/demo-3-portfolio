import ProjectItem from "@/components/ProjectItem";
import { projects } from "../../../data/db.json";
import Link from "next/link";

const Project = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col gap-3 justify-center items-center">
        <p className="text-3xl">Project List</p>

        <div className="w-1/2">
          {projects &&
            projects.map((project, index) => (
              <div key={index}>
                <ProjectItem
                  title={project.title}
                  image={project.image}
                  desc={project.desc}
                  linkURL={project.linkURL}
                />
              </div>
            ))}
        </div>

        <button className="m-2 p-1.5 rounded-md mx-auto shadow-lg border border-txfirst hover:bg-gray-500">
          <Link href="/">Back to Home</Link>
        </button>
      </div>
    </>
  );
};

export default Project;
