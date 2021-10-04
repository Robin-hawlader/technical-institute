
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Services from './component/Srvices/Services';
import About from './component/About/About';
import Support from './component/Support/Support';
import Header from './component/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/service'>
            <Services></Services>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/support'>
            <Support></Support>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
