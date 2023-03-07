
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Main from './components/Main';

function App() {
  return (  
    <Routes> 
      
      <Route path='/' element={<Main/>}/>
        <Route path=':slug' element={<Main/>}/>
    
  </Routes>
    
  );
}

export default App;
