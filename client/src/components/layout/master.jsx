import React, {useEffect} from 'react';
import Header from "./header";
import {useDispatch, useSelector} from "react-redux";
import {checkObjectEmptyOrNull} from "../../utils/helper";
import {getListContent} from "../../actions/content";

function Master(props) {
      const {user} = useSelector(state => state.auth)
      const dispatch = useDispatch()

      useEffect(() => {
            const initListTweets = () => {
                  return dispatch(getListContent())
            }
            initListTweets()
      }, [])

      return (
            <div className='main'>
                  {!checkObjectEmptyOrNull(user) &&
                        <Header user={user}/>
                  }

                  <div className='content'>
                        {props.children}
                  </div>
            </div>
      );
}

export default Master;