import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../redux/UserReducer';

const Home = () => {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  }
  

  return (
    <div>
      <h1>Simple CRUD Using Redux</h1>
      <Link to={'/create'}>Add User</Link>

      <table>
        <thead>
          <tr>
            <th style={{ marginRight: '30px'}}>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {
          users.map((user,index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
              <Link style={{ marginLeft:'20px', textDecoration: 'none', color: 'black'}} to={`/edit/${user.id}`}>EDIT</Link>
              <button onClick={() => handleDelete(user.id)} style={{ marginLeft:'20px'}}>DELETE</button>
              </td>
            </tr>
          ))
         }
        </tbody>
      </table>
    </div>
  )
}

export default Home