import { START_WEB3 }  from '../util/getWeb3';




const web3Reducer = (state = null, action) => {
  switch (action.type) {
    case START_WEB3:
      return Object.assign({}, action.web3 )
    default:
      return state
  }
}


export default web3Reducer;
