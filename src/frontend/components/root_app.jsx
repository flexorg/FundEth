import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Root from './root';
import getWeb3 from '../util/getWeb3';
class RootApp extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    store: this.props.store
  }
};

componentWillMount() {
  // Get network provider and web3 instance.
  // See utils/getWeb3 for more info.

  getWeb3
  .then(results => {
    this.setState({
      web3: results.web3
    })

    // Instantiate contract once web3 provided.

  })
  .catch(() => {
    console.log('Error finding web3.')
  })
}

render(){
  return (
    <Provider store={this.state.store}>
    <HashRouter>
      <Root />
    </HashRouter>
  </Provider>
  )
}


}

export default RootApp;
