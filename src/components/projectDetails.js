import React from "react";
import { useParams } from "react-router-dom";

function Projects() {
  const { companyname } = useParams();
  return (
    
        <div className="card text-center">
          <div className="card-header">
            <h2>Company Name: {companyname}</h2>
          </div>
          <div className="card-body">
            <h5 className="card-title">Project Name:{}</h5>
            <h5>Project Description</h5>

            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
          <div class="card-footer text-muted"></div>
        </div>
        
        
       
   
  );
}

export default Projects;
