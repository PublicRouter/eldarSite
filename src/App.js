
import './App.css';
import videoBg from "./images/mainBg.mkv"

import Home from './components/Home';
import Navigation from "./components/Navigation"


function App() {
  

  return (
    <div className=''>
      <video src={videoBg} autoPlay loop className='fixed top-0 left-0 w-full h-[100vh] object-cover z-[-10]'>
        {/* <source src="https://drive.google.com/file/d/114zQVHdvHKnK_1NJEf1ddlH4_rShxH6z/view?usp=sharing" /> */}
      </video>
      <Navigation />
      <Home />
    </div>
      

        
        
      

    
  );
}

export default App;
