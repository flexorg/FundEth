import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestProject } from '../actions/project_actions';
import { donateToProject } from '../util/projectUtil';
import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => ({
  project: state.projects[ownProps.match.params.projectId],
  donateToProject: donateToProject
});

const mapDispatchToProps = dispatch => ({
  requestProject: id => dispatch(requestProject(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow));
