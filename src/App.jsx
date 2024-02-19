import { Routes, Route} from 'react-router-dom'

//components
import AllPlayers from './components/AllPlayers';
import NavBar from './components/NavBar';
import SinglePlayer from './components/SinglePlayer';

export default function App() {

  return (
  <div className="App">
    <nav className='navBar'>
      <h1 className="puppybowl">Puppy Bowl</h1>
      <NavBar />
    </nav>

    <Routes>
        <Route path='/players' element={<AllPlayers/>} />
        <Route path='/players/:playerId' element={<SinglePlayer />}/>
    </Routes>
    </div>
  );
}
