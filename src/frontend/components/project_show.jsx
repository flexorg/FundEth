import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

// props:
// this.props.project: current project to showErrors
// this.props.requestProject(id): requests project from the
//  block-chain and adds it to the store

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestProject(this.props.match.params.projectId)
    .then(() => this.showMap());
  }

  componentWillReceiveProps(newProps) {
    // fetchs desired route if the new URL does not match the current URL
    // or if the passed down route is undefined
    if (newProps.match.url !== this.props.match.url || this.props.project === undefined) {
      this.props.requestProject(newProps.match.params.projectId)
    }
  }

  render() {
    if (this.props.project) {
      const project = this.props.project;

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
    } else {
      return null;
    }
  }
}

export default ProjectShow;
