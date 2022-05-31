import './App.css';
import {useSwipeable} from 'react-swipeable'
import { useState } from 'react';

const config = {
  delta: 10,                             // min distance(px) before a swipe starts. *See Notes*
  preventScrollOnSwipe: false,           // prevents scroll during swipe (*See Details*)
  trackTouch: true,                      // track touch input
  trackMouse: true,                     // track mouse input
  rotationAngle: 0,                      // set a rotation angle
  swipeDuration: Infinity,               // allowable duration of a swipe (ms). *See Notes*
  touchEventOptions: { passive: true },  // options for touch listeners (*See Details*)
} 

function App() {
  const [swipe, setSwipe] = useState('???')
  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => nextSlide('left'),
    onSwipedRight: (eventData) => nextSlide('right'),
    ...config,
  })

  const nextSlide = (swipe) => {
    let direction;

    if (swipe === "left") {
      direction = "TO THE LEFT"
    }
    if (swipe === "right") {
      direction = "TO THE RIGHT"
    }

    setSwipe(direction)
  }

  return (
    <div className="App" {...handlers}>
      <header className="App-header">
      <h1>{swipe}</h1>
      </header>
    </div>
  );
}

export default App;
