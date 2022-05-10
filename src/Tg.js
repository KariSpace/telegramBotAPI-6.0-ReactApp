import React from 'react';
//import WheelComponent from 'react-wheel-of-prizes-kari'
import WheelComponent from './Wheel.js';

const Tg = () => {
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
      "text" : 'Sex Education'
    },
    {
      "id" : '4', 
      "text" : 'Sex and the City'
    },
    {
      "id" : '5', 
      "text" : 'Учим Python за 1 час! #От Профессионала'
    }

  ]
  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000',
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000',
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000'
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
      primaryColor='black'
      contrastColor='white'
      buttonText='Spin'
      isOnlyOnce={false}
      size={200}
      upDuration={30}
      downDuration={150}
      fontFamily='Arial'
    />
  )
}
export default Tg;

