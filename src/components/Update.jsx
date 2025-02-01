import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../redux/UserReducer';

const Update = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const existingUser = users.find((user) => user.id == id);

  const[name, setName] = useState(existingUser ? existingUser.name : "");
  const[email, setEmail] = useState(existingUser ? existingUser.email : "");


  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(
      {
        id:id,
        name:name,
        email:email
      }
    ));
    navigate('/');
  }

  return (
    <div>
        <h1>Update user</h1>
        <form onSubmit={handleUpdate}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="name">Email:</label>
                <input type="email" name='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Update