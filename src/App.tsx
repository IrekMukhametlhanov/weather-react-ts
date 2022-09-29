import React from 'react';
import 'normalize.css'
import {Route, Routes} from 'react-router';
import { Home } from './pages/Home/components/Home';
import { MontchStatistics } from './pages/Home/MontchStatistics/MontchStatistics';
import Header from './Shared/Header/Header';
import { Popup } from './Shared/Popup/Popup';

function App() {
  return (
    <div className='Globalcontainer'>
       {/* <Popup /> */}
    <div className="Container">
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/montch-statistics' element={<MontchStatistics/>}/>
      </Routes>
    
        </div>
        </div>
  );
}

export default App;
