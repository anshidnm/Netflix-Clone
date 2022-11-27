import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Nabvar';
import Poster from './Components/Poster/Poster';
import { COMEDY,ORIGINAL } from './Constatnts/constants';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Poster title="Netflix Originals" url={ORIGINAL}/>
      <Poster title="Comedy" isSmall url={COMEDY} />
    </div>
  );
}

export default App;
