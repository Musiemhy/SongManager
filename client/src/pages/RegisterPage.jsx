import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerStart } from "../redux/authRedux/authSlice";
import { Link, useNavigate } from "react-router-dom";
import {
  Register_Login_Container,
  Register_Login_Image,
  Register_Login_Data,
  Register_Login_Links,
  LoginButton,
  Register_Login_title,
  Register_Login_desc,
  Register_Login_Form,
  Register_Login_Foritem,
  Register_Login_Formlabel,
  Register_Login_Forminput,
  Register_Login_Formtoggle,
  Register_Login_Formerror,
} from "../styles";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(true);
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.auth);

  const [inputs, setInputs] = useState({
    name: "",
    password: "",
    confirm_password: "",
  });

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisibility(!confirmPasswordVisibility);
  };
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const formSubmission = (e) => {
    e.preventDefault();
    dispatch(registerStart(inputs));

    alert("You have sucessfuly registered, being redirected to login!");
    navigate("/login");
  };

  return (
    <Register_Login_Container>
      <Register_Login_Image></Register_Login_Image>
      <Register_Login_Data>
        <Register_Login_Links>
          <Link to="/login">
            <LoginButton> Login </LoginButton>
          </Link>
          <Link to="/">
            <LoginButton> Home </LoginButton>
          </Link>
        </Register_Login_Links>
        <Register_Login_title>Registration Page</Register_Login_title>
        <Link to="/login">
          <Register_Login_desc>
            Already have an account? Go To Login
          </Register_Login_desc>
        </Link>
        <form onSubmit={formSubmission}>
          <Register_Login_Form>
            <div>
              <Register_Login_Formlabel htmlFor="name">
                Name:
              </Register_Login_Formlabel>
              <Register_Login_Forminput
                type="text"
                name="name"
                id="name"
                value={inputs.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <Register_Login_Foritem>
                <Register_Login_Formlabel htmlFor="password">
                  Password:
                </Register_Login_Formlabel>
                <Register_Login_Formtoggle onClick={togglePasswordVisibility}>
                  {passwordVisibility ? "Show" : "Hide"}
                </Register_Login_Formtoggle>
              </Register_Login_Foritem>
              <Register_Login_Forminput
                type={passwordVisibility ? "password" : "text"}
                name="password"
                id="password"
                value={inputs.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <Register_Login_Foritem>
                <Register_Login_Formlabel htmlFor="confirm_password">
                  Confirm Password:
                </Register_Login_Formlabel>
                <Register_Login_Formtoggle
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {confirmPasswordVisibility ? "Show" : "Hide"}
                </Register_Login_Formtoggle>
              </Register_Login_Foritem>
              <Register_Login_Forminput
                type={confirmPasswordVisibility ? "password" : "text"}
                name="confirm_password"
                id="confirm_password"
                value={inputs.confirm_password}
                onChange={handleChange}
              />
            </div>
            <LoginButton type="submit" disabled={loading}>
              Register
            </LoginButton>
            {error && (
              <Register_Login_Formerror>{error}</Register_Login_Formerror>
            )}
          </Register_Login_Form>
        </form>
      </Register_Login_Data>
    </Register_Login_Container>
  );
};

export default RegisterPage;
