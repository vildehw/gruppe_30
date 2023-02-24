import './App.css';
import './css/main.css'
import Map from './components/Map';
import resources from './components/Ressurser';


function App() {
  return (
    <main>

      <Map resources={resources}/> 
  
    </main>
  );
}

export default App;
