import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { loginStart, logout } from "../redux/authRedux/authSlice";
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

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const { loading, error, loggedIn } = useSelector((state) => state.auth);

  const [inputs, setInputs] = useState({
    name: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const formSubmission = (e) => {
    e.preventDefault();
    if (!inputs.name || !inputs.password) {
      toast.error("Please fill in both fields.");
      return;
    }
    dispatch(loginStart(inputs));
  };

  useEffect(() => {
    if (loggedIn) {
      toast.success("You have successfully logged in!");
      navigate("/listpage");
    }
  }, [loggedIn, navigate]);

  useEffect(() => {
    return () => {
      dispatch(logout());
    };
  }, [dispatch]);

  return (
    <Register_Login_Container>
      <Register_Login_Image />
      <Register_Login_Data>
        <Register_Login_Links>
          <Link to="/register">
            <LoginButton> Register </LoginButton>
          </Link>
          <Link to="/">
            <LoginButton> Home </LoginButton>
          </Link>
        </Register_Login_Links>
        <Register_Login_title>Login Page</Register_Login_title>
        <Link to="/register">
          <Register_Login_desc>
            Don't have an account? Go To Register
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
                required
              />
            </div>
            <div>
              <Register_Login_Foritem>
                <Register_Login_Formlabel htmlFor="password">
                  Password:
                </Register_Login_Formlabel>
                <Register_Login_Formtoggle
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisibility ? "Show" : "Hide"}
                </Register_Login_Formtoggle>
              </Register_Login_Foritem>
              <Register_Login_Forminput
                type={passwordVisibility ? "password" : "text"}
                name="password"
                id="password"
                value={inputs.password}
                onChange={handleChange}
                required
              />
            </div>
            <LoginButton type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </LoginButton>
            {error && (
              <Register_Login_Formerror role="alert">
                {error}
              </Register_Login_Formerror>
            )}
          </Register_Login_Form>
        </form>
      </Register_Login_Data>
    </Register_Login_Container>
  );
};

export default LoginPage;
