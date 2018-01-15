import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { receiveProjects } from '../actions/project_actions';
import ProjectsIndex from './projects_index';

const mapStateToProps = state => {
  return ({
    projects: state.projects,
    web3: state.web3});
};

const mapDispatchToProps = dispatch => ({
  receiveProjects: (projects) => dispatch(receiveProjects)
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsIndex));
