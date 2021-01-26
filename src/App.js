import './App.css';
import peoples from ' ../../../src/fakeData';
import { useState } from 'react';
import User from './components/User/User';

function App() {

  //Here , i am use two hook . One for fake data and one for selected friend
  const [users , setUsers] = useState([...peoples]);
  const [friends , setFriends] = useState([]);

  //Here , this arrow function add user in friend hooks.
  const addUserHandler = (user)=>{
     
               const searchFriend = friends.find(friend=> user.Email=== friend.Email );
              // console.log(searchFriend);
               
               if(searchFriend === undefined){

                       const newFriend = [...friends, user];
                       setFriends(newFriend);

               }
               else
               {
                    alert('This friend already added');
               }
}

//Use reduce method for totol income in friend list
  const total = friends.reduce((sum , user)=> sum + user.Income , 0);

  return (
    <div >
           <div style = {{textAlign: 'center'}}>
                      <h3>Total User : {users.length}</h3>
                      <h4>Add Friend : {friends.length}</h4>
                      <p>Friend Income : ${total} </p>
           </div>

            {
                  users.map(user => <User user = {user}  addUserHandler = {addUserHandler}/>)
            }
    </div>

  );
}

export default App;
