import React from 'react';
import './Employee.css';

class Employee  extends React.Component{
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Employees</h1>
        <table className='table'>
          <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date Of Birth</th>
            <th>Sex</th>
            <th>Salary</th>
            <th>Email</th>
            <td><button className="action" >Add</button></td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className="action" >Edit</button>
              <button className="action" >Delete</button>
            </td>
          </tr>
          </tbody>
        </table>

      </div>

    );
  }
}

export default Employee;
