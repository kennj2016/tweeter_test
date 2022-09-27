import React, {useEffect, useState} from 'react';
import AuthFeature from "../index";
import {Button, Form, Input} from "antd";
import { MailOutlined , LockOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import AlertCommon from "../../../components/alert";
import {ALERT_ERROR, ALERT_SUCCESS} from "../../../constants/common";
import {login} from "../../../actions/auth";

const Login = (props) => {
      const [form] = Form.useForm()
      const [loading, setLoading] = useState(false)
      const {is_logged} = useSelector(state => state.auth)
      const navigate = useNavigate()
      const dispatch = useDispatch()

      useEffect(() => {
            console.log('is_logged', is_logged);
            if(is_logged){
                  return navigate('/')
            }
      }, [])

      const onLogin = async (e) => {
            try {
                  setLoading(true)
                  const res = await dispatch(login(e))
                  console.log(res);
                  setLoading(false)
                  AlertCommon(ALERT_SUCCESS, res.message)
                  return navigate('/')
            } catch (e) {
                  setLoading(false)
                  return AlertCommon(ALERT_ERROR, e.message)
            }
      }

      return (
            <AuthFeature>
                  <div className='login-page'>
                        <div className="wp-inner container">
                              <div className="widget">
                                    <div className="widget-body">
                                          <div className="form-login form-auth">
                                                <Form form={form}
                                                      layout='vertical'
                                                      name="form-login-hooks"
                                                      onFinish={onLogin}
                                                >
                                                      <Form.Item name='email' >
                                                            <Input placeholder='Enter your email' prefix={<MailOutlined />}  />
                                                      </Form.Item>
                                                      <Form.Item name="password">
                                                            <Input.Password placeholder='Password' prefix={<LockOutlined />} />
                                                      </Form.Item>
                                                      <Button loading={loading} type="primary" htmlType="submit">
                                                            Sign In
                                                      </Button>
                                                </Form>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </AuthFeature>
      );
}

export default Login;