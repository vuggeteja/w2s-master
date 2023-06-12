import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import LoginForm from './components/Login/LoginForm';
import AdminDashboard from './components/Login/AdminDashboard';
import ManagerDashboard from './components/Login/ManagerDashboard';
import EmployeeDashboard from './components/Login/EmployeeDashboard';
import authReducer from './components/Redux/authReducer';

const store = createStore(authReducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Provider store={store}>
            <Routes>
              <Route exact path="/" element={<LoginForm />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/manager" element={<ManagerDashboard />} />
              <Route path="/employee" element={<EmployeeDashboard />} />
            </Routes>
          </Provider>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
