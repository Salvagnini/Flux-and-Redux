import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LogOut = () => {
  const dispatchFunc = useDispatch();
  const isLoggedOut = useSelector((state) => !state.isLoggedIn);
  const submit = (e) => {
    e.preventDefault();
    dispatchFunc({ type: 'LOGOUT' });
    };
    
  return (
    !isLoggedOut && (
      <form onSubmit={submit}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" />
        <button type="submit">Log out</button>
      </form>
    )
  );
};

export default LogOut;