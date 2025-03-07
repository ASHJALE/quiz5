import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import Router and Route
import Login from './Login'; // Import Login component
import Navbar from './Navbar'; // Import Navbar component
import Dashboard from './Dashboard';
import ProductScreen from './ProductScreen';
import UserScreen from './UserScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Login} /> {/* Set Login as the default route */}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/products/:id" component={ProductScreen} />
          <Route path="/users/:id" component={UserScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
