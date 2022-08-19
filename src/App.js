
import './App.css';
import videoBg from "./images/mainBg.mp4"
import imageBg from "./images/mainBackground.png"

import Home from './components/Home';
import Navigation from "./components/Navigation"


function App() {

  return (
    <div className='h-[110vh] w-full'>
      <video playsInline={true} muted={true} autoPlay={true} loop={true} poster={imageBg} className="fixed top-0 left-0 w-full h-[100vh] w-full object-cover z-[-10]" id="BgVideo">
        <source src={videoBg} type="video/mp4"/>
      </video>
      <Navigation />
      <Home />
    </div>
      

        
        
      

    
  );
}

export default App;
