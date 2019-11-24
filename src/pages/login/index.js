import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button,
  LoginTitle
} from './style';

class Login extends PureComponent {

  render() {
    const { handleLogin, login } = this.props;

    if (!login) {
      return(
        <LoginWrapper>
          <LoginBox>
            <LoginTitle>登录</LoginTitle>
            <Input placeholder='账号' ref={(input) => {this.account = input}} />
            <Input placeholder='密码' type='password' ref={(input) => {this.password = input}} />
            <Button onClick={() => handleLogin(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/' />
    }
    
  }

}

const mapState = (state) => ({
  login: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
  handleLogin(accountElem, passwordElem) {
    dispatch(actionCreators.loginIn(accountElem.value, passwordElem.value));
  }
});

export default connect(mapState, mapDispatch)(Login);
