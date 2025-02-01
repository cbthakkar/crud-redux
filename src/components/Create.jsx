import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../redux/UserReducer';

const Create = () => {

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
    dispatch(addUser({id:newId,name,email}));
    navigate('/')
  }

  return (
    <div>
        <h1>Add new user</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' placeholder='Enter name' onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="name">Email:</label>
                <input type="email" name='email' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Create