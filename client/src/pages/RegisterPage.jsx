import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { registerStart, logout } from "../redux/authRedux/authSlice";
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
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const { loading, error, registered } = useSelector((state) => state.auth);

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

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      return "Password must be at least 8 characters long.";
    }
    if (!hasUppercase) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!hasLowercase) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!hasNumber) {
      return "Password must contain at least one number.";
    }
    if (!hasSpecialChar) {
      return "Password must contain at least one special character.";
    }
    return "";
  };

  const formSubmission = (e) => {
    e.preventDefault();
    if (!inputs.name || !inputs.password || !inputs.confirm_password) {
      toast.error("Please fill in all fields.");
      return;
    }

    const passwordValidationError = validatePassword(inputs.password);
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
      return;
    }

    if (inputs.password !== inputs.confirm_password) {
      setPasswordError("Passwords do not match.");
      return;
    }

    setPasswordError("");
    dispatch(registerStart(inputs));
  };

  useEffect(() => {
    if (registered) {
      toast.success("Registration successfull!");
      navigate("/login");
    }
  }, [registered, navigate]);

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
                required
                value={inputs.name}
                onChange={handleChange}
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
                required
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
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {confirmPasswordVisibility ? "Show" : "Hide"}
                </Register_Login_Formtoggle>
              </Register_Login_Foritem>
              <Register_Login_Forminput
                type={confirmPasswordVisibility ? "password" : "text"}
                name="confirm_password"
                id="confirm_password"
                required
                value={inputs.confirm_password}
                onChange={handleChange}
              />
            </div>
            {passwordError && (
              <Register_Login_Formerror role="alert">
                {passwordError}
              </Register_Login_Formerror>
            )}
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
