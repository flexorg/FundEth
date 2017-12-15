import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

// props:
// this.props.projects: all projects
// this.props.createProject(): function for creating a project on the
//  block-chain
// this.props.requestProjects(): requests all projects from the
//  block-chain and adds them to the store

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      // project title
      title: "",
      // project description
      description: "",
      // project image url
      imageUrl: "",
      // boolean indicating visibility of the errors icon
      showErrors: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // updates the state of the title based on input
  update(field) {
    return e => {this.setState({[field]: e.currentTarget.value});
                  if (this.state.showErrors === true) {
                    this.setState({showErrors: false});
                  }
                };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.title === "" || this.state.description === "" ||
        this.state.imageUrl === "") {
      this.setState({showErrors:true});
    } else {
      console.log("Submit placeholder");
    }
  }

  render() {
    return(
      <div className="project-form-container">

        <div className="project-input-container">

          <div className="project-form-header-container">
            <div className="project-form-header">
              Create New Project
            </div>
          </div>

          <input type="text"
                value={this.state.title}
                onChange={this.update('title')}
                className="project-title-input"
                placeholder="Title"
          />

          <textarea className ="project-description-input"
                value={this.state.description}
                onChange={this.update('description')}
                placeholder="Description"
          >
          </textarea>

          <input type="text"
                value={this.state.imageUrl}
                onChange={this.update('imageUrl')}s
                className="project-image-input"
                placeholder="Image URL"
          />

          <div className="project-button-container">
            <div className="projects-errors-icon"
            style={{visibility: this.state.showErrors ? 'visible' : 'hidden' }}
            >
              <img src="https://i.imgur.com/SiWMw8F.png"
                className="projects-errors-image"
              />
              <div className="projects-errors-box">
                <ul className="projects-errors">
                  <li>Please fill out all fields</li>
                </ul>
              </div>
            </div>
            <button className="project-create-button"
              onClick={this.handleSubmit}
            >
              <span>Create Project</span>
            </button>
          </div>

        </div>

      </div>
    );
  }
}

export default ProjectForm;
