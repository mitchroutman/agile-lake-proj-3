import React from 'react';
//import Create from './components/create';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Contact from './pages/Contact'
function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
        <Route 
            path='/contact' 
            element={<Contact />} 
          />
          <Route 
            path='/' 
            element={<Intro />} 
          />
          <Route 
            path='/dashboard' 
            element={<Dashboard />} 
          />
          
          <Route 
            path='*'
            element={<h1 className='display-2'>Wrong page!</h1>}
          />
        </Routes>
      </>
    </BrowserRouter>

    // <BrowserRouter>
    //   < Navbar />
      
    //  <Routes>
    //   < Route exact path="/login" component={Login} />
    //   {/* < Route exact path="/dashboard" component={Dashboard} /> */}
    //   < Route exact path="/user" component={Dashboard} />
    //   < Route exact path="/project" component={Project} />
    //   < Route exact path="/contact" component={Contact} />
      
    //   {/* < Route exact path="/create" component={Create} /> */}

    //   < Route exact path="/" component={Intro} />

      
      
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
    
  );
}

export default App;
