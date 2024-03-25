import React from "react";
import projectlist from "../projectlist.json";
import "../style/Projectsgallery.css";
import { Link } from "react-router-dom";
function ProjectsGallery() {
  return (
    <>
      <h2 className="text-center mt-4 title-text">Project Gallery</h2>
      <div className="container-fluid mt-4">
        <div className="row justify-content-center mt-4 mb-4">
          {projectlist.map((project) => {
            return (
              <div className="projectcard col-md-4 col-lg-4 col-xl-4 col-xxl-4 col-sm-6 col-xs-6">
                <div key={project.id}>
                  <div
                    className=" card mb-3 py-2 px-3 gap-2"
                    style={{ width: "25rem" }}
                  >
                    <h5 className="card-title text-center">{project.title}</h5>
                    <img
                      className="card-img-top"
                      src={project.image}
                      alt={project.title}
                    />
                    <Link
                      className="card-body btn btn-warning mt-3 mb-3"
                      style={{ width: "80%", marginLeft: "10%" }}
                      to={`/projects/${project.id}`}
                    >
                      MORE INFO
                    </Link>
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
