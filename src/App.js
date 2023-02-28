

import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContentPage from './components/ContentPage';
import Layout from './components/Layout';


function App() { 
 
  return ( 
    <>  
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path=':slug' element={<ContentPage/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
