import './App.css';
import peoples from ' ../../../src/fakeData';
import { useState } from 'react';
import User from './components/User/User';

function App() {

  //Here , i am use two hook . One for fake data and one for selected friend
  const [users , setUsers] = useState([...peoples]);
  const [friend , setFriend] = useState([]);

  //Here , this arrow function add user in friend hooks.
  const addUserHandler = (user)=>{

                const newFriend = [...friend, user];
                setFriend(newFriend);
}

//Use reduce method for totol income in friend list
  const total = friend.reduce((sum , user)=> sum + user.Income , 0);

  return (
    <div >
           <div style = {{textAlign: 'center'}}>
                      <h3>Total User : {users.length}</h3>
                     <h4>Add Friend : {friend.length}</h4>
                    <p>Friend Income : ${total} </p>
           </div>

            {
                  users.map(user => <User user = {user}  addUserHandler = {addUserHandler}/>)
            }
    </div>

  );
}

export default App;
