import { START_WEB3 }  from '../util/getWeb3';


const accountsReducer = (state = null, action) => {
  switch (action.type) {
    case "GET_ACCOUNTS":
      return Object.assign({}, action.accounts)
    default:
      return state
  }
}


export default accountsReducer;
