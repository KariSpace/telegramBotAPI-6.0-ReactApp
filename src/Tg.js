import React from 'react';

const Tg = () => {
  
  function sayHello() {
    alert(window.Telegram.WebApp);
  }
  
  return (
    <button onClick={sayHello}>Click me!</button>
  );
};

export default Tg;