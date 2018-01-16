import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { default as contract } from 'truffle-contract';
import fundeth_artifacts from '../../../build/contracts/FundEth.json'

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
      showErrors: false,
      instance: null
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



  componentWillReceiveProps(newProps) {
    if (newProps.web3 !== undefined) {
      this.setState( {web3: newProps.web3})

    }
  }



  handleSubmit(e) {
    e.preventDefault();
    if (this.state.title === "" || this.state.description === "" ||
        this.state.imageUrl === "") {
      this.setState({showErrors:true});
    } else {

    }
    if (this.props.web3 !== null) {
      var FundEth = contract(fundeth_artifacts);
      FundEth.setProvider(this.props.web3.currentProvider);
      FundEth.deployed().then((instance) => {
        instance.CreateProject(this.state.title, this.state.description, this.state.imageUrl, {from: this.props.accounts[0], gas: 500000 })
        .then(this.props.history.push("/"));
      })
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
