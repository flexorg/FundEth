import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

// props:
// this.props.project: JSON of projects data which includes id, title,
//  description, and imageUrl
class ProjectIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const project = this.props.project;

    return(
      <div className="project-item-container">

        <div className="project-item-info">
          <Link to={`/projects/${project.id}`} className="project-item-title-link">
            <div className="project-item-title">
              {project.name}
            </div>
          </Link>
          <div className="project-item-description">
            {project.description}
          </div>
        </div>

        <div className="project-item-image-container">
          <Link to={`/projects/${project.id}`} className="project-item-title-link">
            <img src={project.imageUrl}
              className="project-item-image"
            ></img>
          </Link>
        </div>

      </div>
    );
  }
}

export default ProjectIndexItem;
