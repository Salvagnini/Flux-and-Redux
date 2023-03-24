import React from 'react'
import { useSelector } from 'react-redux';

const SaveList = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const coffee = useSelector((state) => state.coffee);
  const sugar = useSelector((state) => state.sugar);

  const save = () => {
    localStorage.setItem('coffee', coffee);
    localStorage.setItem('sugar', sugar);
  };
  const clear = () => {
    localStorage.removeItem('coffee');
    localStorage.removeItem('sugar');
  };
  return isLoggedIn ? (
    <div className="save">
      <button onClick={save}>SAVE</button>
      <button onClick={clear}>CLEAR</button>
    </div>
  ) : (
    <div className="save">
      <p>You must be logged in to save the list.</p>
    </div>
  );
};

export default SaveList;