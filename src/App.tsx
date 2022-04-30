import React from 'react'; 
// import ScrollToTop from './ScrollToTop';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';  
import HomePage from './Pages/HomePage'; 
import AboutUs from './Pages/AboutUs';
import Devotion from './Pages/Devotion';
import Officer from './Pages/Officer';
import ContactUs from './Pages/ContactUs';
import ShareTestimony from './Pages/ShareTestimony';
import { useLocation } from 'react-router-dom';
import FirstTimer from './Pages/FirstTimer';
import DataManagement from './Pages/DataManagement';
import COQuote from './Pages/C.OQuote';
import UpComingProgram from './Pages/UpComingProgram';
import OnlineGiving from './Pages/OnlineGiving';
import { IoIosArrowUp } from 'react-icons/io';

function App() {  
  

  function ScrollToTop() { 

    const location = useLocation()
    React.useEffect(() => {
      
      window.scrollTo(0, 0);
    }, [location])
  
    return null
  } 

  React.useEffect(() => {
    fetch(`https://www.universal-tutorial.com/api/getaccesstoken`, {
      method: 'GET', // or 'PUT'
      headers: {
          "Accept": "application/json",
          "api-token": "V1mhwD-iZGLntVICiPhQfxRIhGpJ1xcokq0xZiMbq9YfK2VcXy0EikVGhfxI6RH-RLE",
          "user-email": "egileoniso.ekada@gmail.com"
      }
  })
  .then(response => response.json())
  .then(data => {   
        localStorage.setItem('country-token', data.auth_token) 
    })
    .catch((error) => {
        console.error('Error:', error); 
    });   
  },)

  return ( 
    <> 
      <Router>   
      <ScrollToTop />
        <Routes>   
          <Route path='/' element={<HomePage />}/> 
          <Route path='/aboutus' element={<AboutUs />}/>  
          <Route path='/devotion' element={<Devotion />}/>  
          <Route path='/officers' element={<Officer />}/>  
          <Route path='/contactus' element={<ContactUs />}/>  
          <Route path='/sharetestimony' element={<ShareTestimony />}/>   
          <Route path='/firsttimer' element={<FirstTimer />}/>     
          <Route path='/attendance' element={<DataManagement />}/>
          <Route path='/quotes' element={<COQuote />}/>    
          <Route path='/upcomingprogram' element={<UpComingProgram />}/>  
          <Route path='/onlinegiving' element={<OnlineGiving />}/>  
        </Routes>
      </Router>
    </>
  );
}

export default App;
