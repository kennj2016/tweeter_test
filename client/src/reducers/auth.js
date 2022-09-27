import {LOGIN_SUCCESS, LOGOUT} from '../constants/action';

const initialState = {is_logged: false, user: {}}

const authReducer = (state = initialState, action) =>  {
      const {type, payload} = action

      switch (type) {

            case LOGIN_SUCCESS:
                  return {
                        ...state,
                        is_logged: true,
                        user: payload.user,
                  };
            case LOGOUT:
                  return {
                        ...state,
                        is_logged: false,
                        user: null,
                  };
            default:
                  return state;
      }
}

export default authReducer;
