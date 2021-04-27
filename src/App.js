import s from './App.module.css';
import Headers from './Components/Headers/Header';
import Home from './Components/Home/Home';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className={s.App}>
        <Headers />
        <Route path='/Home' render={ () => <Home newPostText={props.state.newPostText} BestFriends={props.state.HomePage.BestFriends} Comments={props.state.HomePage.Comments} dispatch={props.dispatch}/>} />
        <Route path='/Dialogs' render={ () => <Dialogs Dialog={props.state.Dialog} dispatch={props.dispatch} newMessageText={props.state.newMessageText} store={props.store}/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;