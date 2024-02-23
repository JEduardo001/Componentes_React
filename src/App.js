
import './App.css';
import ParteSuperior from './components/ParteSuperior';
import Logo from './components/Logo';
import Productos from './components/Productos';


/*
          612 157 6441
useEffect(() =>
  aumentar();
}, [nombre])... estados a los que escucha*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo/>
        <ParteSuperior/>
      </header>
      <Productos/>

    </div>
  );
}

export default App;
