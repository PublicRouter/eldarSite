
import './App.css';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import {useState} from 'react'
import Home from './components/Home';
import Navigation from "./components/Navigation"
// import BottomBanner from './components/BottomBanner';
// import CreateCharacterPage from "./pages/CreateCharacterPage"
// import Profile from './pages/Profile';
// import FightMainPage from './pages/FightPage';

function App() {
  
  // const client = new ApolloClient({
  //   uri: 'http://localhost:3000/graphql',
  //   cache: new InMemoryCache(),
  // });

  // const [currentPage, updatePage] = useState('Home')
  // const renderPage = () => {
  //   switch (currentPage) {
  //     case 'Home':
  //       return <Home />
  //     case 'CreateCharacterPage':
  //       return <CreateCharacterPage />
  //     case 'Profile':
  //       return <Profile />
  //     case 'FightPage':
  //       return <FightMainPage />

  //     default:
  //       return <Home />
  //   }
  // }
  return (
    // <ApolloProvider client={client}>
      <div className='leveled'>
        {/* <Navigation updatePage={updatePage}/> */}
        <Navigation />
        <Home />
        {/* <CreateCharacterPage /> */}
        {/* <Profile /> */}
        {/* {renderPage()} */}
        {/* <BottomBanner /> */}
      </div>
    // </ApolloProvider>
    
  );
}

export default App;
