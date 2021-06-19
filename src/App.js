import { useState } from 'react';
import AddUser from './Components/Users/AddUser'
import UsersList from './Components/Users/UsersList';
import './App.css';

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: userName, age: userAge, id: Math.random().toString()}];
    });
  }

  return (
    <div className="app">
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
