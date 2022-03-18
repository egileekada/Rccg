import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';   
import Navbar from './components/Navbar';
import ConfigurationScreen from './Screens/ConfigurationScreen';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import ManageData from './Screens/ManageData';
import RegistaredMembersScreen from './Screens/RegistaredMembersScreen';
import TestimonyScreen from './Screens/TestimonyScreen';  
function App() {
  

  function ScrollToTop() {  

    const location = useLocation()
    React.useEffect(() => {
      
      window.scrollTo(0, 0);
    }, [location])
  
    return null
  } 
  const [hide, setHide] = React.useState(false)

  return ( 
    <>
      <ChakraProvider>
        <Router> 
        <div className='w-full h-40 z-50 relative' >
          <Navbar hide={hide} />
        </div>  
          <ScrollToTop />
          <Routes>    
            <Route path='/' element={<LoginScreen hide={setHide} />}/> 
            <Route path='/dashboard' element={<HomeScreen hide={setHide} />}/> 
            <Route path='/members' element={<RegistaredMembersScreen />}/> 
            <Route path='/attendance' element={<ManageData />}/> 
            <Route path='/testimony' element={<TestimonyScreen />}/> 
            <Route path='/settings' element={<ConfigurationScreen />}/> 
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
