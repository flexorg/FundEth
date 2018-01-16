import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createProject } from '../util/projectUtil';
import ProjectForm from './project_form';

const mapStateToProps = state => ({
  projects: Object.values(state.projects),
  web3: state.web3,
  accounts: state.accounts
});

const mapDispatchToProps = dispatch => ({
  createProject
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm));
