import data from './data/SongData.js';
import SongData from './components/songList.js'

function App() {
  return (
    <div className="App">
      <h1> CREATE PLAYLIST</h1>
      <SongData data ={data}/>
    </div>
  );
}

export default App;
