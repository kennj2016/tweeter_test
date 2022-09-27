import contentApi from '../api/contentApi'
import {ADD_CONTENT, LIST_CONTENT} from "../constants/action";

export const getListContent = () => (dispatch) => {
      return new Promise((resolve, reject) => {
            contentApi.listContents().then(
                  (res) => {
                        dispatch({
                              type: LIST_CONTENT,
                              payload: res.data,
                        });
                  },
                  (err) => {
                        return reject(err)
                  }
            )
      })
}

export const createNewTweet = (formData) => (dispatch) => {
      return new Promise((resolve, reject) => {
            contentApi.createContent(formData).then(
                  (res) => {
                        dispatch({
                              type: ADD_CONTENT,
                              payload: res.data,
                        });
                        return resolve(res)
                  },
                  (err) => {
                        return reject(err)
                  }
            )
      })
}