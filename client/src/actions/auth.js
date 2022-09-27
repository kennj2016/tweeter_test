import authApi from '../api/authApi'
import {LOGIN_SUCCESS, LOGOUT} from "../constants/action";

export const login = (formData) => (dispatch) => {
      return new Promise((resolve, reject) => {
            authApi.login(formData).then(
                  (res) => {
                        dispatch({
                              type: LOGIN_SUCCESS,
                              payload: res.data,
                        });
                        localStorage.setItem('access_token', res.data.access_token);
                        resolve(res)
                  },
                  (err) => {
                        return reject(err)
                  }
            )
      })
}

export const logout = () => (dispatch) => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("persist:root");
      dispatch({
            type: LOGOUT,
      });
};

