import React from 'react';

const Tg = () => {
  
  function sayHello() {
    return(window.Telegram.WebApp);
  }
  
  return (
    <div >{JSON.stringify(window.Telegram.WebApp)}</div>
  );
};

export default Tg;