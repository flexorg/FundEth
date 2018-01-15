import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="nav-main-container">

        <div className="nav-header-container">
          <div className="nav-header">
            FundEth
          </div>
        </div>

        <div className="nav-button-container">
          <div className="project-index-button-container">
            <Link className="project-create-link" to="/projects/new">
              <button className="project-create-button">
                <span>Create Project</span>
              </button>
            </Link>
          </div>
          
          <Link className="nav-button-link" to="/">
            <button className="nav-button">
              Projects
            </button>
          </Link>
        </div>

      </div>
    );
  }
}

export default NavBar;
