import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddClothes from "./components/add/Add";
import Clothes from "./components/clothes/Clothes";
import Home from "./components/home/Home";
import Navbar from "./components/shared/Navbar";
import Coffee from "./components/coffee";
import Login from "./components/login/Login";

export const AuthContext = createContext(null);

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    const oldUser = JSON.parse(localStorage.getItem("user"));
    setUser(oldUser);
  }, []);
  return (
    <Router>
      <AuthContext.Provider value={{ user, setUser }}>
        <Navbar />
        <main>
          <Switch>
            <Route path="/clothes" component={Clothes} />
            <Route path="/add" component={AddClothes} />
            <Route path="/add">{user ? <AddClothes /> : <Login />}</Route>
            <Route path="/login" component={Login} />
            <Route path="/coffee" component={Coffee} />
            <Route path="/home" component={Home} />
          </Switch>
        </main>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
