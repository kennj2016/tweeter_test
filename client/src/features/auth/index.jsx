import React from 'react';
import '../../stylesheets/auth.scss'

const AuthFeature = (props) => {
      return (
            <div className='auth-page'>
                  {props.children}
            </div>
      );
}

export default AuthFeature;