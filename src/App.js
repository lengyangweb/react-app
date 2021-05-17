import './App.css';
import Header from './components/Header';
import Users from './components/Users';
import { useState } from 'react';
import PropTypes from 'prop-types'

function App() {
  const [ users, setUsers ] = useState([
    { id: 1, name: 'Homer', lastname: 'Simpson', age: 34 },
    { id: 2, name: 'March', lastname: 'Simpson', age: 32 },
    { id: 3, name: 'Bart', lastname: 'Simpson', age: 10 },
    { id: 4, name: 'Lisa', lastname: 'Simpson', age: 9 }
  ]);

  // Remove Users
  const removeUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }

  return (
    <div className="app">
      <div className="container">
        <Header title="Users List" />
        <Users removeUser={removeUser} users={ users } />
      </div>
    </div>
  );
}

App.propTypes = {
  users: PropTypes.array,
  setUsers: PropTypes.func,
  removeUser: PropTypes.func,
}

export default App;
