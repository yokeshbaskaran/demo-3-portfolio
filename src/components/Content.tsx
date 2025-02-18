import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../../data/db.json";
import Link from "next/link";

const Content = () => {
  return (
    <>
      <div className="text-txfirst my-5">
        <h2>
          Familiar Tech Stack: <span>React, JavaScript</span>
        </h2>
        <p>Projects:</p>
        <div>
          {projects &&
            projects
              .filter((_, index) => index < 2)
              .map((project, index) => (
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
        <button className="m-2 p-1.5 flex rounded-md mx-auto shadow-lg border border-txfirst hover:bg-gray-500">
          <Link href="/projects">More Projects</Link>
        </button>
      </div>
    </>
  );
};

export default Content;
