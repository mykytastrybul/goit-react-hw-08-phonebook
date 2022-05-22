import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={s.container}>
      <NavLink
        to="/register"
        className={s.link}
        style={({ isActive }) => (isActive ? { color: 'red' } : undefined)}
      >
        Sing in
      </NavLink>
      <NavLink
        to="/login"
        className={s.link}
        style={({ isActive }) => (isActive ? { color: 'red' } : undefined)}
      >
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
