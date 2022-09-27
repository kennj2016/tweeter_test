import {ADD_CONTENT, LIST_CONTENT} from '../constants/action';

const initialState = {contents : []}

const contentReducer = (state = initialState, action) =>  {
      const {type, payload} = action

      switch (type) {
            case ADD_CONTENT:
                  return {
                        ...state,
                        contents: [payload].concat(state.contents)
                  };
            case LIST_CONTENT:
                  return {
                        ...state,
                        contents: payload,
                  };
            default:
                  return state;
      }
}

export default contentReducer;
