import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "../index";
import PropTypes from "prop-types";
import styled from "styled-components";
import loginImg from "../assets/login.png";
import { login } from "../actions/actions";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import AuthWindow from "../components/auth/AuthWindow";
import { RedirectToPage } from '../common/Styled/index'

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  singIn = () => {
    const { email, password } = this.state;
    const data = {
      email,
      password
    };
    this.props.login(data);
  };
  render() {
    return (
      <AuthWindow name="showWindowLeft" image={loginImg} text="Sign in">
        <CustomInput
          inputPlaceholder="Email"
          typeInp="email"
          setValue={val => this.setState({ email: val })}
        />
        <CustomInput
          inputPlaceholder="Password"
          typeInp="password"
          setValue={val => this.setState({ password: val })}
        />
        <Buttons>
          <CustomButton
            text="Sign in"
            bgColor={'transparent'}
            brColor={'1px solid #f27059'}
            textColor={'#f27059'}
            setClick={this.singIn} />
          <RedirectToPage onClick={() => browserHistory.push("/signUp")}>
            Sign up
          </RedirectToPage>
        </Buttons>
      </AuthWindow>
    );
  }
}
Login.propTypes = {
  login: PropTypes.func.isRequired
};
const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(login(data))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Login);


const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;