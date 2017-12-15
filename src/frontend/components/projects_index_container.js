import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestProjects } from '../actions/project_actions';
import ProjectsIndex from './projects_index';

const mapStateToProps = state => ({
  projects: Object.values(state.projects)
});

const mapDispatchToProps = dispatch => ({
  requestProjects: () => dispatch(requestProjects())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsIndex));
