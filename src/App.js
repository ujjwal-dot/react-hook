import logo from './logo.svg';
import './App.css';
import HooksCounter from './components/HooksCounter';
import HooksCounterTwo from './components/HooksCounterTwo';
import HooksCounter3 from './components/HooksCounter3';
import HooksCounterone from './components/HooksCounterone';
import HooksMouse from './components/HooksMouse';
import MouseCounter from './components/MouseCounter';
import DataFetch from './components/DataFetch';

function App() {
  return (
    <div className="App">
     {/* <HooksMouse/> */}
     {/* <MouseCounter/> */}
     <DataFetch/>
    </div>
  );
}

export default App;
