import React from 'react'
import {Layout, Form} from 'antd'
import NavigationBar from "./NavigationBar";
import Canvas from "./Canvas";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";


class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            records: 0,
            date: new Date().toLocaleTimeString() + ',' + new Date().toLocaleDateString(),
            loginOrRegister: true
        };
    }

    handleCheckLogin = () => {

    };

    handleLoginOrRegister = () => {
        this.setState({
            loginOrRegister: !this.state.loginOrRegister
        });
    };

    handleSignShow = () => {
        const {records} = this.state;

        if (records < 32) {
            this.setState({
                records: records + 1
            });
        }
    };

    handleTimeRefresh = () => {
        this.setState({
            date: new Date().toLocaleTimeString() + ',' + new Date().toLocaleDateString()
        });
    };

    componentDidMount() {
        if (this.state.records < 32) {
            setInterval(this.handleSignShow, 300);
        }

        setInterval(this.handleTimeRefresh, 100);
    }

    render() {
        const {records, date, loginOrRegister} = this.state;


        return (
            <Layout style={{height: '100%', display: 'inherit'}}>
                <NavigationBar/>
                <Canvas/>
                <Layout style={{
                    position: 'absolute',
                    margin: '0px 9% 0px 13%',
                    top: '290px',
                    display: 'inline',
                    width: '78%',
                    height: '400px',
                    backgroundColor: 'rgba(255,255,255,0)'
                }}>
                    <div style={{width: '35%', float: "left"}}>
                        <div key='1' style={{MozUserSelect: 'None', WebkitUserSelect: 'None', fontFamily: '\'Lobster\', cursive', fontSize: 27, opacity: records < 8? records / 8 : 1}}>
                            Welcome you to use the Swimming Cloud today!
                        </div>
                        &nbsp;
                        <div key='2' style={{MozUserSelect: 'None', WebkitUserSelect: 'None', fontFamily: '\'Lobster\', cursive', fontSize: 30, opacity: records < 16? (records - 8) / 8 : 1}}>
                            Today is {date}.
                        </div>
                        &nbsp;
                        <div key='3' style={{MozUserSelect: 'None', WebkitUserSelect: 'None', fontFamily: '\'Lobster\', cursive', fontSize: 35, opacity: records < 24? (records - 16) / 8 : 1}}>
                            Up to now, we already have 30 users...
                        </div>
                        &nbsp;
                        <div key='4' style={{MozUserSelect: 'None', WebkitUserSelect: 'None', fontFamily: '\'Lobster\', cursive', fontSize: 40, opacity: records < 32? (records - 24) / 8 : 1}}>
                            Hope you can have a happy journey here!
                        </div>
                    </div>
                    <div style={{
                        textAlign: 'center',
                        float: 'right',
                        padding: '30px 24px 24px 24px',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        borderRadius: '10px',
                        marginLeft: '15%',
                        width: '35%'
                    }}>

                        {loginOrRegister?<WrappedLoginForm handleCheckLogin={this.handleCheckLogin}/>:<WrappedRegisterForm handleCheckLogin={this.handleCheckLogin}/>}
                        <a onClick={this.handleLoginOrRegister}>{loginOrRegister?'register now!':'Already have a account? login now!'}</a>
                    </div>
                </Layout>
            </Layout>
        );
    }
}

const WrappedLoginForm = Form.create()(LoginForm);
const WrappedRegisterForm = Form.create()(RegisterForm);
export default LoginPage;