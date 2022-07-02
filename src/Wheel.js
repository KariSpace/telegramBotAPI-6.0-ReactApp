import React from 'react';


//import WheelComponent from 'react-wheel-of-prizes-kari'
import WheelComponent from './WheelConstructor.js';



const Wheel = () => {

  var segments = [
    {
      "id" : '1', 
      "text" : 'The Best of Archie Comics, 416 c.'
    },
    {
      "id" : '2', 
      "text" : 'React JS Быстрый Курс 2020'
    },
    {
      "id" : '3', 
      "text" : 'Інформаційні системи і структури даних'
    },
    {
      "id" : '4', 
      "text" : 'The Blood Ninja Trilogy'
    },
    {
      "id" : '5', 
      "text" : 'Бази даних в інформаційних системах'
    }  ,  {
      "id" : '6', 
      "text" : 'Сервер на основі операційної системи FreeBSD'
    } ,   {
      "id" : '7', 
      "text" : 'Чистий код. Створення і рефакторинг за допомогою Agile'
    }

  ]
  const segColors = [

    '#f6a46c',
    '#ba6859',
    '#7d6d72',
    '#dc9b76',
    '#977772',
    '#f6a46c',
    '#d79574',
    '#857078',
    '#ba8a73',
    '#f6a46b',
    '#d48069',
    '#807076',
    '#b3816b',
    '#f6a46c',
    '#ac7460',
    '#7d6d72',
    '#dc9b76',
    '#977772',
    '#f6a46c',
    '#d79574',
    '#857078',
    '#ba8a73',
    '#d48069',
    '#807076',
    '#f6a46c',
    
  ]
  const onFinished = (winner) => {
    console.log(winner)
    window.Telegram.WebApp.MainButton.text = winner.text;
    window.Telegram.WebApp.MainButton.show();
  }
  return (
    <WheelComponent
      segments={segments}
      segColors={segColors}
      winningSegment='won 10'
      onFinished={(winner) => onFinished(winner)}
      primaryColor='#2b1e17'
      contrastColor='white'
      buttonText='Go'
      isOnlyOnce={false}
      size={190}
      upDuration={30}
      downDuration={120}
      fontFamily='Arial'
    />
  )
  
}

export default Wheel;

