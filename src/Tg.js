import React from 'react';
//import WheelComponent from 'react-wheel-of-prizes-kari'
import WheelComponent from './Wheel.js';




const Tg = () => {
  let segment = (new URLSearchParams(window.location.search)).get("segment")


  const segments = [
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
      "text" : 'React JS - React Tutorial for Beginners'
    },
    {
      "id" : '4', 
      "text" : 'The Blood Ninja Trilogy'
    },
    {
      "id" : '5', 
      "text" : 'Учим Python за 1 час! #От Профессионала'
    }  ,  {
      "id" : '6', 
      "text" : 'Учим Python за 1 час! '
    } ,   {
      "id" : '7', 
      "text" : 'Учим iug ig'
    },
    {
      "id" : '5', 
      "text" : 'Учим Python за 1 час! #От Профессионала'
    }  ,  {
      "id" : '6', 
      "text" : 'Учим Python за 1 час! '
    } ,   {
      "id" : '7', 
      "text" : 'Учим iug ig'
    } ,  {
      "id" : '6', 
      "text" : 'Учим Python за 1 час! '
    } ,   {
      "id" : '7', 
      "text" : 'Учим iug ig'
    }

  ]
  const segColors = [

    '#ba6859',
    '#ac7460',
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
    
  ]
  const onFinished = (winner) => {
    console.log(winner)
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
export default Tg;

