import { Layout, Menu } from 'antd'
import style from './BasicLayout.css'
const { Header, Content, Footer } = Layout
export default (props:any)=> {
  console.log('props',props)
  return (
    <div style={{width:'100%',height:'100%'}}>
      <Layout className={style.layout}>
        <Header>
          <div className={style.user} />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{width:500}}>
            <Menu.Item key="1">问卷列表</Menu.Item>
            <Menu.Item key="2">个人信息</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className={style.content}> { props.children }</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>@ 爱吃小龙虾创作</Footer>
      </Layout>
    </div>
  );
}