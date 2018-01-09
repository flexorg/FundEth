import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestProjects } from '../actions/project_actions';
import { getProjects } from '../util/projectUtil';
import ProjectsIndex from './projects_index';
import values from 'lodash/values';

const mapStateToProps = state => {
  return ({projects: state.projects,
          getProjects: getProjects});
};

const mapDispatchToProps = dispatch => ({
  requestProjects: () => dispatch(requestProjects())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsIndex));
