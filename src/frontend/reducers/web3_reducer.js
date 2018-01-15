import { START_WEB3 }  from '../util/getWeb3';


const _initialState = {
  web3: undefined
}

const web3Reducer = (state = _initialState, action) => {
  switch (action.type) {
    case START_WEB3:
      return Object.assign({}, { web3: action.web3 })
    default:
      return _initialState
  }
}


export default web3Reducer;
