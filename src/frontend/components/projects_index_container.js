import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestProjects } from '../actions/project_actions';
import ProjectsIndex from './projects_index';

const mapStateToProps = state => {
  return ({
    projects: state.projects,
    web3: state.web3,
    accounts: state.accounts
  });
};

const mapDispatchToProps = dispatch => ({
  requestProjects: (instance, account) => dispatch(requestProjects(instance))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsIndex));
