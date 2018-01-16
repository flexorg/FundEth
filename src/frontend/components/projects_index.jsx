import React from 'react';
import ReactDOM from 'react-dom';
import ProjectIndexItem from './project_index_item';
import { Link } from 'react-router-dom';
import { default as contract } from 'truffle-contract';
import fundeth_artifacts from '../../../build/contracts/FundEth.json';



// // test projects data
// var description1 = "Our local school needs supplies for the upcoming school year. We are looking for funds to purchase notebooks, writing utensils, and folders. Any help would be greatly appreciated by the students!";
// var description2 = "My precious Reginald has outgrown his kitty bed and needs a larger place to snooze! Please help Reginald get a restful night's sleep and donate to help purr-chase a new cat bed.";
// var imageUrl1 = "https://nawaiolapcs.org/wp-content/uploads/School-Supply.jpg";
// var imageUrl2 = "https://www.communitycatspodcast.com/wp-content/uploads/2014/11/Cat_Content.jpg";
// // array of test projects
// export var projectsArr = [
//   {id:1, title:"Elementary School Supplies", description:description1, imageUrl:imageUrl1, amount:3.76},
//   {id:2, title:"New Bed For My Cat", description:description2, imageUrl:imageUrl2, amount:6.34}
// ];
//
// // props:
// this.props.projects: all projects
// this.props.requestProjects(): requests all projects from the
//  block-chain and adds them to the store

class ProjectsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: {},
      instance: null
    };

    this.handleContract = this.handleContract.bind(this)
  }

  componentWillMount(){
    this.handleContract()
  }

  componentDidMount() {
    window.setTimeout(this.handleContract, 1500)
  }


  handleContract(){
    if (this.state.instance !== null) {
      this.props.requestProjects(this.state.instance, this.props.accounts[0])
    } else if (this.props.web3 !== null) {
      var FundEth = contract(fundeth_artifacts);
      FundEth.setProvider(this.props.web3.currentProvider);
      FundEth.deployed().then((instance) => {
        this.setState(instance: instance)
        this.props.requestProjects(instance, this.props.accounts[0])
      })
    }
  }


  componentWillReceiveProps(newProps) {
    if (this.state.projects !== newProps.projects) {
      this.setState({projects: newProps.projects});
    } else if (newProps.web3 !== undefined) {
      this.setState( {web3: newProps.web3})
      this.handleContract()
    }
  }

  render() {
    if (Object.values(this.state.projects).length !== 0) {
      const projectsArr = Object.values(this.state.projects);
      return(
        <div className="projects-index-container">

          <div className="projects-index-header-container">
            <div className="projects-index-header">
              Projects
            </div>
          </div>

          <div className="projects-index-list-container">
            <ul className="projects-index-list">
              {
                projectsArr.map(project => (
                  <ProjectIndexItem key={`index-${project.id}`} project={project} />
                ))
              }
            </ul>
          </div>

        </div>
      );
    } else {
      return null;
    }
  }
}

export default ProjectsIndex;
