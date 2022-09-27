import React, {useState} from 'react';
import {Button, Form, Input, Modal} from "antd";

import AlertCommon from "../../../components/alert";
import {ALERT_ERROR, ALERT_SUCCESS} from "../../../constants/common";
import {useDispatch} from "react-redux";
import {createNewTweet} from "../../../actions/content";

const ModalCreateTweet = ({visible, closeModal}) => {
      const [loading, setLoading] = useState(false)
      const [form] = Form.useForm()
      const dispatch = useDispatch()
      const [numberTxt, setNumberTxt] = useState(0)
      const maxNumberText = 240

      const onCreateTweet = async (e) => {
            try {
                  const res = await dispatch(createNewTweet(e))
                  AlertCommon(ALERT_SUCCESS, res.message)
                  form.resetFields()
                  return closeModal()
            } catch (e) {
                  setLoading(false)
                  return AlertCommon(ALERT_ERROR, e.message)
            }
      }

      const handleCloseModal = () => {
            form.resetFields()
            setNumberTxt(0)
            return closeModal()
      }

      const onChangeInput = (e) => {
            setNumberTxt(e.target.value.length)
      }

      return (
            <Modal
                  footer={null}
                  visible={visible}
                  maskClosable={false}
                  closable={false}
                  centered
                  className='modal-general modal-add-tweet'
                  zIndex={1001}
            >
                  <div className="head-modal">
                        <p className="title">Create Tweet</p>
                        <Button onClick={handleCloseModal}>Close</Button>
                  </div>
                  <div className="body-modal">
                        <div className="staffs">
                              <div className="form-wp">
                                    <Form
                                          form={form}
                                          layout='vertical'
                                          name="form-cancel-hooks"
                                          onFinish={onCreateTweet}
                                    >
                                          <Form.Item name="description" label="Tweet something">
                                                <Input.TextArea onChange={onChangeInput}
                                                      autoSize={{ minRows: 3, maxRows: 5 }}
                                                />
                                          </Form.Item>
                                          <p className={`display-length ${numberTxt > maxNumberText ? 'exceed' : ''}`}>{`${numberTxt} / ${maxNumberText}`}</p>

                                          <Form.Item>
                                                <Button loading={loading} type="primary" htmlType="submit">
                                                      Tweet
                                                </Button>
                                          </Form.Item>
                                    </Form>
                              </div>
                        </div>
                  </div>
            </Modal>
      );
}

export default ModalCreateTweet;