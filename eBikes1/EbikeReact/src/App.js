import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import Banner from './Components/Banner';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route><Route exact path="/">
          <Banner />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
