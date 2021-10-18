import { 
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink } from 'react-router-dom'
import AddClothes from './components/add/Add';
import Clothes from './components/clothes/Clothes';
import Home from './components/home/Home'
import Navbar from './components/shared/Navbar';
import Coffee from './components/coffee'


function App() {
  return (
    <Router>
      <Navbar />
   
        <Switch>
          <Route path='/clothes' component={Clothes} />
          <Route path='/add' component={AddClothes} />
          <Route path='/coffee' component={Coffee} />
          <Route path='/home' component={Home} />
        </Switch>

    </Router>
  );
}

export default App;
