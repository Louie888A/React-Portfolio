import React from "react";
import projectlist from "../projectlist.json";
import "../style/Projectsgallery.css";
import { Link } from "react-router-dom";
function ProjectsGallery() {
  return (
    <>
      <h2 className="project gallery text-center mt-3 mb-3">Project Gallery</h2>
      <div className="container-fluid">
        <div className="row">
          {projectlist.map((project) => {
            return (
              <div className="col-md-4 col-sm-6 col-lg-4">
                <div key={project.id}>
                  <div className="card">
                    <h5 className="card-title text-center">{project.title}</h5>
                    <img
                      className="card-img-top img-fluid"
                      src={project.image}
                      alt={project.title}
                    />
                    <Link to={`/projects/${project.id}`}>MORE INFO</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProjectsGallery;
