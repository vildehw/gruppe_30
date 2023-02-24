import './App.css';
import './css/main.css'
import Map from './components/Map';
import resources from './components/ressurser';


function App() {
  return ( 
    <body> 
      <header>
        <nav>
          <Button/>
        </nav>
      </header>
    <main>

      <Map resources={resources}/> 
  
    </main> 
    </body>
  );
}

export default App;
