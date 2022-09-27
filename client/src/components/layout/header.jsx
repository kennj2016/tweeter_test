import React from 'react';
import {Button} from "antd";
import {useDispatch} from "react-redux";
import {logout} from "../../actions/auth";
import {useNavigate} from 'react-router-dom'


function Header({user}) {
      const dispatch = useDispatch()
      const navigate = useNavigate()

      const handleLogout = () => {
            dispatch(logout())
            return navigate('/login')
      }
      return (
            <div className='header-main'>
                  <div className="wp-inner">
                        <p><span>Welcome, </span>{user.name}</p>
                        <Button onClick={handleLogout}>Logout</Button>
                  </div>

            </div>
      );
}

export default Header;