import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Button} from "antd";
import ModalCreateTweet from "./components/add-tweet";
import '../../stylesheets/tweet.scss'

function TweetFeature(props) {
      const {is_logged} = useSelector(state => state.auth)
      const {contents} = useSelector(state => state.content)
      const navigate = useNavigate()
      const [visibleAdd, setVisibleAdd] = useState(false)

      useEffect(() => {
            if(!is_logged) {
                  return navigate('/login')
            }
      }, [])

      const renderListTweets = () => (
            contents.map(el => (
                  <div className="item" key={el.id}>
                        <div>
                              <p>{el.user.name}</p>
                        </div>
                        <div className='tweet-content'>
                              <p>{el.description}</p>
                        </div>
                        <div>
                              <p>{el.created_at_format}</p>
                        </div>
                  </div>
            ))
      )

      return (
            <div className='tweet-page'>
                  <div className="widget">
                        <div className="wd-head">
                              <h3 className="title">Tweets</h3>
                              <Button onClick={() => setVisibleAdd(true)}>Add</Button>
                        </div>
                        <div className="wd-body">
                              <div className="list-tweets">
                                    <div className="title">
                                          <p>User</p>
                                          <p className='tweet-content'>Tweet content</p>
                                          <p>Time</p>
                                    </div>
                                    <div className="value">
                                          {renderListTweets()}
                                    </div>
                              </div>
                        </div>
                  </div>
                  <ModalCreateTweet visible={visibleAdd} closeModal={() => setVisibleAdd(false)}/>
            </div>
      );
}

export default TweetFeature;