import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-primary">
      <div className="container">
        <div className="row align-items-center no-gutters">
          <div className="col-xl-5 col-lg-6 col-md-12">
            <div className="py-5 py-lg-0">
              <h1 className="text-white display-4 fw-bold">
                Welcome to Louie S L portfolio
              </h1>
              <p className="text-white-50 mb-4 lead">
                I am a Front-End Developer, based in Birmingham.
              </p>
              <Link to="/Projectsgallery" className="btn btn-success">
                Browse Project Gallery
              </Link>
              <Link to="/Contact" className="btn btn-white">
                Contact Me ?
              </Link>
            </div>
          </div>
          <div className=" col-xl-7 col-lg-6 col-md-12 text-lg-right text-center">
            <img
              src="https://louie888a.github.io/picreactpofo/Louie-S-L.jpg"
              alt="mypicture"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
