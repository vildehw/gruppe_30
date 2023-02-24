import './App.css';
import './css/main.css'
import Button from './components/Button';
import Content from './components/Content';
import resources from './components/ressurser';
import Map from './components/Map';


function App() {
  return ( 
    <body> 
      <header> 
        <h1>Ressursarkiv</h1>
        <nav>
          <Button/>
        </nav>
      </header>
    <main>
      <ul>
        <Map resources={resources}/>
      </ul>
    </main> 
    </body>
  );
}

export default App;
