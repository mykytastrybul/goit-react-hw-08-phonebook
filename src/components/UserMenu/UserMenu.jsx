import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authThunk';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <div className={s.container}>
      <p className={s.email}>{email}</p>
      <button
        className={s.btn}
        type="button"
        onClick={() => {
          dispatch(logOut());
          navigate('/');
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
