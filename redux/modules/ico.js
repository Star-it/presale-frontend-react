const GET_SMART_CONTRACT_REQUEST = 'GET_SMART_CONTRACT_REQUEST';
const GET_SMART_CONTRACT_SUCCESS = 'GET_SMART_CONTRACT_SUCCESS';
const GET_SMART_CONTRACT_FAILURE = 'GET_SMART_CONTRACT_FAILURE';

const initialState = {
    tokensSold: 0,
    weiRaised: 0,
    investorCount: 0,
    startTime: 0,
    endTime: 0,
    hardCap: 0,
    totalTokens: 0,
    softCapReached: false,
    crowdsaleFinished: false
};

export default function loader(state = initialState, action = {}) {
  switch (action.type) {
    case GET_SMART_CONTRACT_REQUEST:
      return {
            ...state
        };
    case GET_SMART_CONTRACT_SUCCESS:
        return {
            ...state,
            ...action.result.result
        };
    case GET_SMART_CONTRACT_FAILURE:
        return {
            ...state,
            ...action.error
        };
    default:
      return state;
  }
}

export function getSmartContractInfo() {
    return {
        types: [GET_SMART_CONTRACT_REQUEST, GET_SMART_CONTRACT_SUCCESS, GET_SMART_CONTRACT_FAILURE],
        promise: (client) => client.get(`/eth/getSmartContractInfo`)
    };
}