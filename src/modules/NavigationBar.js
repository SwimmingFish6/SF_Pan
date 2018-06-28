import React from 'react';
import '../css/App.css';
import {Layout, Row, Col, Menu, Divider, Icon, Avatar} from 'antd';

const Header = Layout;
const SubMenu = Menu.SubMenu;

class NavigationBar extends React.Component {

    render() {
        return (
            <Header style={{backgroundColor: '#001529'}}>
                <Row>
                    <Col span={1}> </Col>
                    <Col span={17}><img height={'70px'} src="images/logo.png"/><span
                        style={{fontSize: 25, color: '#FFFFFF', fontFamily: 'Indie Flower', fontWeight: 'bold'}}>Swimming Cloud</span></Col>
                    <Col span={6}>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            style={{lineHeight: '64px'}}
                        >
                            <SubMenu title={<Row>
                                <Col span={6}>
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                            size="large"/></Col>
                                <Col span={16}><span style={{fontfamily: 'Microsoft YaHei', fontSize: 16, fontWeight: 'bold'}}>一天到晚游泳的鱼</span></Col>
                                <Col span={2}>&nbsp;<Divider type="vertical"/></Col>
                            </Row>}>
                                <Menu.Item key="1">Profile</Menu.Item>
                                <Menu.Item key="2">Help Center</Menu.Item>
                                <Menu.Item key="3">logout</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="4" style={{paddingLeft: '0px', paddingRight: '0px'}}><Icon type="skin"/></Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Header>
        );
    }
}

export default NavigationBar;