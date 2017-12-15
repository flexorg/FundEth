import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
// test projects data
import { projectsArr } from './projects_index';

// props:
// this.props.project: current project to showErrors
// this.props.requestProject(id): requests project from the
//  block-chain and adds it to the store

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // test project
    const project = projectsArr[0];

    return(
      <div className="project-show-container">

        <div className="project-show-header">
          <div className="project-show-title">
            {project.title}
          </div>
          <div className="project-show-amount-container">
            <div className="project-show-amount">
              {`${project.amount} ETH`}
            </div>
            <div className="project-show-amount-tag">
              Amount raised
            </div>
          </div>
        </div>

        <img src={project.imageUrl}
          className="project-show-image"
        ></img>

        <div className="project-show-description">
          {project.description}
        </div>

        <div className="project-show-button-container">
          <button className="project-create-button">
            <span>Donate</span>
          </button>
        </div>

      </div>
    );
  }
}

export default ProjectShow;
