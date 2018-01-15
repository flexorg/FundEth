import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestProjects } from '../actions/project_actions';
import ProjectForm from './project_form';

const mapStateToProps = state => ({
  projects: Object.values(state.projects),
  web3: state.web3
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm));
