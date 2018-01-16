import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { default as contract } from 'truffle-contract';
import fundeth_artifacts from '../../../build/contracts/FundEth.json';

// props:
// this.props.project: current project to showErrors
// this.props.requestProject(id): requests project from the
//  block-chain and adds it to the store
// this.props.donateToProject(projectId, amount): utility function for
//  donating to this project

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // amount to be donated
      amount: "",
      // boolean indicating visibility of the errors icon
      showErrors: false,
      instance: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

  componentWillReceiveProps(newProps) {
    // fetchs desired route if the new URL does not match the current URL
    // or if the passed down route is undefined
    if (newProps.match.url !== this.props.match.url || this.props.project === undefined) {

      this.handleContract(newProps.match.params.projectId)
    }
  }

  handleContract(id){
    if (this.state.instance !== null) {
        this.props.requestProject(id, instance, this.props.accounts[0])
    } else if (this.props.web3 !== null) {
      var FundEth = contract(fundeth_artifacts);
      FundEth.setProvider(this.props.web3.currentProvider);
      FundEth.deployed().then((instance) => {
        this.setState(instance: instance)
        this.props.requestProject(id, instance, this.props.accounts[0])
      })
    }
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
    if (this.state.amount === "") {
      this.setState({showErrors:true});
    } else {
      var FundEth = contract(fundeth_artifacts);
      FundEth.setProvider(this.props.web3.currentProvider);
      FundEth.deployed().then((instance) => {
        this.setState(instance: instance)
        this.props.donateToProject(this.props.project.id, this.state.amount, instance, this.props.accounts[0])
        .then(this.props.history.push("/"));
      })
    }
  }

  render() {
    if (this.props.project) {
      const project = this.props.project;

      return(
        <div className="project-show-container">

          <div className="project-show-header">
            <div className="project-show-title">
              {project.name}
            </div>
            <div className="project-show-amount-container">
              <div className="project-show-amount">
                {`${project.amt_raised} ETH`}
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
            <div className="projects-errors-icon"
            style={{visibility: this.state.showErrors ? 'visible' : 'hidden' }}
            >
              <img src="https://i.imgur.com/SiWMw8F.png"
                className="projects-errors-image"
              />
              <div className="projects-errors-box">
                <ul className="projects-errors">
                  <li>Please enter a valid amount</li>
                </ul>
              </div>
            </div>

            <input type="number"
                  step="any"
                  value={this.state.amount}
                  onChange={this.update('amount')}
                  className="project-show-amount-input"
                  placeholder="Amount"
            />

            <button className="project-create-button"
              onClick={this.handleSubmit}
            >
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
