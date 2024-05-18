import './App.css';
import React from 'react';
// import { Headings } from './heading'

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home } from './home';
import {About} from './About'
import {Services} from './services'
import {Contact} from './contact'
import { Nav } from './nav';
import { Checking } from './cheking';


const App = () => {
  return (
    <>
<BrowserRouter>
<Nav />
<Routes>

    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />}  />
    <Route path='/services' element={<Services />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/checking' element={<Checking />} />

</Routes>
</BrowserRouter>


    </>
  )
}

export default App;
