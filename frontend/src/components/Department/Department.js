import React from 'react';
import logo from '../../logo.svg';
import './Department.css';

class Department  extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      departments: props.departments
    }
  }

  addNewDepartment = (event) => {
    event.preventDefault()
    const title = this.state.title
    this.setState({title: ''})
    event.target.value = ''
  }

  handleChange = (event) => {
    this.setState({ title: event.target.value })
  }

  handleChange2 = (event) => {
    const departments = this.state.departments.map( item => {
      console.log(event.target)
      if(item._id === event.currentTarget.id){
        item.title = event.currentTarget.value
      }
      return item
    })
    this.setState( { departments })
  }

  edit = (e) => {
    // put request
    const dept = this.state.departments.find((item) => item._id === e.target.id)
  }

  delete = (e) => {
    //delete request
    const id = e.target.id
  }

  showEmployees = (e) => {
    // load employees
    const id = e.target.id
  }

  createDepartmentsTable = () => {
    return (
      <tbody>
      {
        this.state.departments.map((item) => {
          return(
            <tr >
              <td>
                <input id={item._id} type={'text'} value={item.title} onChange={this.handleChange2}/>
              </td>
              <td>
                <button id={item._id} onClick={this.edit}> Edit</button>
                <button id={item._id} onClick={this.delete}> Delete</button>
                <button id={item._id} onClick={this.showEmployees}> List of employees</button>
              </td>
            </tr>
          )
        })
      }
      </tbody>
    );
  }

  render () {
    const { departments } = this.props
    return (
      <div>
        <h1>Departments</h1>
        <p> Add department form </p>
        <form>
          <label>Title: </label>
          <input type={'text'} value={this.state.title} onChange={this.handleChange}/>
          <br/>
          <button onClick={ this.addNewDepartment }> Add new one </button>
        </form>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {
              this.createDepartmentsTable()
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Department;
