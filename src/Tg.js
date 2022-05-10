import React from 'react';
import WheelComponent from 'react-wheel-of-prizes'

const Tg = () => {
  const segments = [
    'The Best of Archie Comics, 416 c.',
    'Учим Python за 1 час! #От Профессионала',
    'React JS Быстрый Курс 2020',
    'Sex Education',
    'Sex and the City',
    'Soul Gangster Radio Show 082 - mixed by Gyhio',    
    'The Best of Archie Comics, 416 c.',
    'Учим Python за 1 час! #От Профессионала',
    'React JS Быстрый Курс 2020',
    'Sex Education',
    'Sex and the City'

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
      size={220}
      upDuration={10}
      downDuration={100}
      fontFamily='Arial'
    />
  )
}
export default Tg;

