import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createProject } from '../../../../backend/util/projectUtil';
import { requestProjects } from '../actions/project_actions';
import ProjectForm from './project_form';

const mapStateToProps = state => ({
  projects: Object.values(state.projects),
  createProject: createProject
});

const mapDispatchToProps = dispatch => ({
  requestProjects: () => dispatch(requestProjects())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm));
