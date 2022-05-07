import React from 'react';

const Tg = () => {
  
  function sayHello() {
    return(window.Telegram.WebApp);
    

  }
  let city = (new URLSearchParams(window.location.search)).get("city")

  return (
      
    <div >{JSON.stringify(window.Telegram.WebApp)}
    
    <div >{city}</div>
    </div>
  );
};

export default Tg;