import React from 'react';
import 'antd/dist/antd.css';
import {Layout, Menu, Icon} from 'antd';
import FileTable from './FileTable';
import NavigationBar from './NavigationBar'

const Sider = Layout;


class HomePage extends React.Component {

    render() {
        return (
            <Layout style={{height: '100%', display: 'inherit'}}>
                <NavigationBar/>
                <Layout style={{display: 'inline'}}>
                    <Sider style={{background: '#fff', paddingTop: '20px', width: '200px', float: 'left', height: '100%'}}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                        >
                            <Menu.Item key="1"><a onClick={this.checkBasicInfo}><Icon
                                type="folder"/>全部文件</a></Menu.Item>
                            <Menu.Item key="2"><a onClick={this.checkHistoryRecord}><Icon
                                type="picture"/>图片</a></Menu.Item>
                            <Menu.Item key="3"><a onClick={this.checkTimeschdule}><Icon
                                type="file-text"/>文档</a></Menu.Item>
                            <Menu.Item key="4"><a onClick={this.checkRequest}><Icon
                                type="video-camera"/>视频</a></Menu.Item>
                            <Menu.Item key="5"><a onClick={this.checkRequest}><Icon
                                type="customer-service"/>音乐</a></Menu.Item>
                            <Menu.Item key="6"><a onClick={this.checkRequest}><Icon type="file"/>其他</a></Menu.Item>

                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px', margin: '24px 100px 20px 20px'}}>
                        <FileTable/>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default HomePage;