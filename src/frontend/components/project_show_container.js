import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProjectShow from './project_show';
import { requestProject } from '../actions/project_actions';
import { donateToProject } from '../util/projectUtil';

const mapStateToProps = (state, ownProps) => ({
  project: state.projects[ownProps.match.params.projectId],
  web3: state.web3,
  accounts: state.accounts
});

const mapDispatchToProps = dispatch => ({
  requestProject: (id, instance, account) => dispatch(requestProject(id, instance, account)),
  donateToProject
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow));
