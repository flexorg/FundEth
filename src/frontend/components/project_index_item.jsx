import React from 'react';
import ReactDOM from 'react-dom';

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
          <div className="project-item-title">
            {project.title}
          </div>

          <div className="project-item-description">
            {project.description}
          </div>
        </div>

        <div className="project-item-image-container">
          <img src={project.imageUrl}
            className="project-item-image"
          ></img>
        </div>

      </div>
    );
  }
}

export default ProjectIndexItem;
