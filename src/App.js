import './App.css';
import Header from './components/Header';
import Users from './components/Users';
import { useState } from 'react';
import PropTypes from 'prop-types'
import AddUsers from './components/AddUsers';
import Button from './components/Button';

function App() {
  const [ showAdd, setshowAdd ] = useState(false);
  const [ users, setUsers ] = useState([
    { 
      id: 1, 
      name: 'Homer', 
      lastname: 'Simpson', 
      age: 34 
    },
    { 
      id: 2, 
      name: 'March', 
      lastname: 'Simpson', 
      age: 32 
    },
    { 
      id: 3, 
      name: 'Bart', 
      lastname: 'Simpson', 
      age: 10 }
  ]);

  // Remove Users
  const removeUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }

  // Add Users
  const addUser = (user) => {
    console.log(user);
    setUsers([...users, user]);
  }

  // Toggle
  const toggleForm = () => {
    setshowAdd(!showAdd);
  }

  return (
    <div className="app">
      <Button 
        color={ showAdd ? 'red' : 'green' }
        text={ showAdd ? 'Close' : 'Add' }
        showAdd={toggleForm}
      />
      { 
        showAdd ? 
          <div className="form-container">
            <AddUsers onAdd={ addUser }/>
          </div> : false 
      }
      <div className="container">
        <Header title="Users List" />
        <Users removeUser={ removeUser  } users={ users } />
      </div>
    </div>
  );
}

App.propTypes = {
  users: PropTypes.array,
  setUsers: PropTypes.func,
  removeUser: PropTypes.func,
  adduser: PropTypes.func,
}

export default App;
