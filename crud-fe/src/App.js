import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:3000/users").then((response) => {
      return response.json()
    }).then((json) => {
      setUsers(json)
    })
  },[])

  function handleClick() {
    fetch("http://127.0.0.1:3000/user", {
      method: "POST",
      body: JSON.stringify({
        name: "guilherme",
        email: "guilherme@test.com"
      }),
      headers:{
        "Content-Type": "application/json"
      }
    })
  }

  function handleUpdate(id) {
    fetch(`http://127.0.0.1:3000/user/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: "guilherme test",
        email: "guilherme@test.com test"
      }),
      headers:{
        "Content-Type": "application/json"
      }
    })
  }

  return (
   <ul>
    {users.map((user) => {
      return <li>{user.name} <button onClick={() => handleUpdate(user.id)}>update</button></li>
    })}
    <button onClick={handleClick}>create</button>
   </ul>
  );
}

export default App;
