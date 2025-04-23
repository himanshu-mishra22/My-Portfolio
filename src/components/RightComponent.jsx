import React from "react";
import { TechStack } from "../techStack";
import { Projects } from "../projects";

const RightComponent = () => {
  return (
    <div className="space-y-8 ">
      {/* Projects Section */}
      <section>
        <div className="mb-4">
          <h2 className="text-2xl font-mono font-bold">My Projects</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Projects.map((project, index) => (
            <div key={index} className="bg-base-200 p-4 rounded-md">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-40 object-cover mb-3"
              />
              <h3 className="font-semibold text-lg">{project.name}</h3>
              <p className="text-sm text-base-content/70">
                {project.description}
              </p>
              <p className="text-xs mt-2 text-primary">{project.techStack}</p>
              {project.live !== "" ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.live}
                  className="text-xs mr-5 mt-2 text-base-content/70"
                >
                  Live demo
                </a>
              ) : (
                ""
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs mt-2 text-base-content/70"
                >
                  GitHub Repo
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Stack Section */}
      <section className="bg-primary w-full text-white rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-mono font-bold">My Stack</h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 p-2">
          {TechStack.map((item, index) => {
            const IconComponent = item.img;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl text-black text-2xl">
                  <IconComponent />
                </div>
                <p className="text-xs mt-2 text-center">{item.name}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default RightComponent;
