import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  DropdownCard,
  DropdownUnorderedList,
  DropdownList,
  DropdownBtn,
  DropdownIcon,
} from "../styles";
import { logoutStart } from "../redux/authRedux/authSlice";

const Dropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutStart());
    navigate("/login");
  };

  return (
    <DropdownCard>
      <DropdownUnorderedList>
        <DropdownList>
          <DropdownBtn onClick={handleLogout}>
            <DropdownIcon
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                id="SVGRepo_tracerCarrier"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#000000"
                  d="M12 3C10.8316 3 9.76862 3.52857 9.05025 4.43506L4.6981 10H4C2.89543 10 2 10.8954 2 12V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V12C22 10.8954 21.1046 10 20 10H19.3019L14.9497 4.43506C14.2314 3.52857 13.1684 3 12 3ZM10.5858 11H7V15H17V11H13.4142L12 9.41421L10.5858 11ZM7 17V19H17V17H7Z"
                ></path>
              </g>
            </DropdownIcon>
            Logout
          </DropdownBtn>
        </DropdownList>
      </DropdownUnorderedList>
    </DropdownCard>
  );
};

export default Dropdown;
