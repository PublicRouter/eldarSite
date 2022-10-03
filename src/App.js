import { useState, useEffect } from 'react';
import './App.css';
import videoBg from "./images/mainBg2.mp4"
import imageBg from "./images/mainBG.webp"
import mobileBg from "./images/croppedBg.png"

import Home from './components/Home';
import Navigation from "./components/Navigation";

const getWidth = () => window.innerWidth;

function App() {

  let [width, setWidth] = useState(getWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setWidth(getWidth())
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  }, [])
 

  return (
    <div className='entireBg'>
      {width <= 420 ?
        <img src={mobileBg} className="fixed top-0 left-0 w-full h-[100vh] object-fill scale-100 bg-right-top z-[-10]" id="bgVideo" />
        :
        <video playsInline={true} muted={true} autoPlay={true} loop={true} poster={imageBg} className="fixed top-0 left-0 w-full h-[100vh] object-fill scale-150 sm:scale-100 bg-right-top z-[-10]" id="bgVideo">
          <source id="videoSrc" src={videoBg} type="video/mp4" />
        </video>
      }
      
      <Navigation />
      <Home />
    </div>   
  );
}

export default App;
