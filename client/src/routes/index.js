import React from 'react';
import Master from "../components/layout/master";
import {Route, Routes} from "react-router-dom";
import {Navigate} from "react-router-dom";
import TweetFeature from "../features/tweet";
import Login from "../features/auth/pages/login";

function ListRouters(props) {
      return (
            <>
                  <Master>
                        <Routes>
                              <Route exact path='/' element={<TweetFeature/>}/>
                              <Route exact path='/login' element={<Login/>}/>
                              <Route path="*" element={<Navigate to={`/`} replace />} />
                        </Routes>
                  </Master>
            </>
      );
}

export default ListRouters;