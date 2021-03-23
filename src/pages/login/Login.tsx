import { Form, Input, Button } from 'antd'
import { useRequest } from '@umijs/hooks'
import {login} from '../../services/login'
import { history } from 'umi';
import { useState } from 'react';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default () => {
  const  [values,setvalues] = useState({})
  const onFinish = (values:Object) => {
    setvalues(values)
    run()
  }

  const { run } = useRequest(() => {
    return login(values)
  },{
    manual: true,
    onSuccess:(res)=>{
      console.log('res===>',res)
      history.push('/survey/list')
    }
  })
  return (<div style={{display:'flex',alignItems:'center',justifyContent:'center',paddingTop:300}}>
     <Form
      style={{width:400}}
      {...layout}
      onFinish={onFinish}
    >
      <Form.Item
        label="账号"
        name="account"
        rules={[
          {
            required: true,
            message: '请输入账号',
          },
        ]}
      >
        <Input size='large'/>
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
        ]}
      >
        <Input.Password size='large'/>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit"   style={{width:'100%',marginTop:20}}>
          登陆
        </Button>
      </Form.Item>
    </Form>
  </div>)
}
