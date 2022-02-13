import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AllGames from './components/AllGames';
import NewGame from './components/NewGame';
import OneGame from './components/OneGame';
import EditGame from './components/EditGame';
import LogReg from './views/LogReg';
import {Router, router} from '@reach/router';
import image from "./img/backgroundImage.jpg"

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${image})`, backgroundRepeat:"no-repeat", backgroundSize: "cover"}}>
      <Router>
        <LogReg path = "/" />
        <AllGames path = "/home" />
        <NewGame path = "/new" />
        <OneGame path = "/game/:id" />
        <EditGame path = "/edit/game/:id"/>
      </Router>

    </div>
  );
}

export default App;
