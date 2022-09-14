import './App.css';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import UserForm from './components/userForm';

function App({users}) {

  const [displayForm, setDisplayForm] = useState(false);

  return (
    <div className="App">
      <button className="button button-primary add-button" onClick={()=> setDisplayForm(!displayForm)}>Add User</button>
      {
        displayForm ? <UserForm onClose={()=> setDisplayForm(!displayForm)} /> : ''
      }
      <div className="table-data">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {
              users.length ?
              users && users.map((user, index)=>(
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.mobile}</td>
                  <td>{user.city}</td>
                </tr>
              ))
              :
              <tr className="emptyData">
                <td colspan="3">No data available....</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
const mapStateToProps = (state)=> {
  return {
    users: state
  }
}

export default connect(mapStateToProps)(App);
