import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <a href={project.url}>Project Link</a>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <strong>Github Link </strong> 
      <a target="#" href={project.github}><GitHubIcon /></a> 
    </div>
  );
}

export default ProjectDisplay;