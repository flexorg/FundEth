import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProjectShow from './project_show';


const mapStateToProps = (state, ownProps) => ({
  project: state.projects[ownProps.match.params.projectId],
  web3: state.web3
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow));
