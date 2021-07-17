import Card from './components/Card/index.js';
import data from './data/SongData.js';
import style from './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <h1> CREATE PLAYLIST</h1>
      <Card data ={data}/>
      </div>
    </div>
  );
}

export default App;
