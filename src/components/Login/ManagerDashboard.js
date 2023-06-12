import React, { Component } from 'react';

class ManagerDashboard extends Component {
  state = {
    employees: [],
    selectedEmployee: null,
    employeeDetails: {
      name: '',
      email: '',
      image: null,
    },
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      employeeDetails: {
        ...prevState.employeeDetails,
        [name]: value,
      },
    }));
  };

  handleImageUpload = (e) => {
    const file = e.target.files[0];
    this.setState((prevState) => ({
      employeeDetails: {
        ...prevState.employeeDetails,
        image: file,
      },
    }));
  };

  handleAddEmployee = (e) => {
    e.preventDefault();
    const { employees, employeeDetails } = this.state;

    // Perform validation on employee details
    if (employeeDetails.name === '' || employeeDetails.email === '' || employeeDetails.image === null) {
      alert('Please enter all employee details.');
      return;
    }

    // Add employee to the list
    const newEmployee = { ...employeeDetails };
    employees.push(newEmployee);

    this.setState({
      employees,
      employeeDetails: {
        name: '',
        email: '',
        image: null,
      },
    });
  };

  handleSelectEmployee = (employee) => {
    this.setState({
      selectedEmployee: employee,
    });
  };

  handleUpdateEmployee = (e) => {
    e.preventDefault();
    const { selectedEmployee, employeeDetails, employees } = this.state;

    // Perform validation on employee details
    if (employeeDetails.name === '' || employeeDetails.email === '' || employeeDetails.image === null) {
      alert('Please enter all employee details.');
      return;
    }

    // Update selected employee details
    const updatedEmployee = { ...selectedEmployee, ...employeeDetails };
    const updatedEmployees = employees.map((employee) =>
      employee === selectedEmployee ? updatedEmployee : employee
    );

    this.setState({
      employees: updatedEmployees,
      selectedEmployee: updatedEmployee,
      employeeDetails: {
        name: '',
        email: '',
        image: null,
      },
    });
  };

  handleDeleteEmployee = () => {
    const { selectedEmployee, employees } = this.state;

    // Remove selected employee from the list
    const updatedEmployees = employees.filter((employee) => employee !== selectedEmployee);

    this.setState({
      employees: updatedEmployees,
      selectedEmployee: null,
    });
  };

  render() {
    const { employees, selectedEmployee, employeeDetails } = this.state;

    return (
      <div className='parent'>
        <h2 align='center'>Manager Dashboard</h2>

        {/* Add Employee Form */}
        
        <form onSubmit={this.handleAddEmployee}>
        <h3 align='center'>Add Employee</h3>
        <div>
        <input
            type="text"
            name="name"
            value={employeeDetails.name}
            onChange={this.handleInputChange}
            placeholder="Name"
          />
         
        </div>
          <br />
          <div>
          <input
            type="email"
            name="email"
            value={employeeDetails.email}
            onChange={this.handleInputChange}
            placeholder="Email"
          />
          </div>
          
          
          <input type="file" onChange={this.handleImageUpload} />
          
          <div>          <button type="submit">Add</button>
</div>
        </form>

        {/* Employee List */}
        <h3 align='center'>Employee List</h3>
        <ul>
          {employees.map((employee) => (
            <li key={employee.email} align='center' onClick={() => this.handleSelectEmployee(employee)}>
              {employee.name}
            </li>
          ))}
        </ul>

        {/* Selected Employee Details */}
        {selectedEmployee && (
          <div>
            <h3>Selected Employee Details</h3>
            <p>Name: {selectedEmployee.name}</p>
            <p>Email: {selectedEmployee.email}</p>
            <p>Image: {selectedEmployee.image ? selectedEmployee.image.name : 'N/A'}</p>

            {/* Update Employee Form */}
            
            <form onSubmit={this.handleUpdateEmployee}>
            <h3 align='cneter'>Update Employee</h3>
            <div>
            <input
                type="text"
                name="name"
                value={employeeDetails.name}
                onChange={this.handleInputChange}
                placeholder="Name"
              />
            </div>
              
              <br />
              <div>
              <input
                type="email"
                name="email"
                value={employeeDetails.email}
                onChange={this.handleInputChange}
                placeholder="Email"
              />
              </div>
              
<div>
<input type="file" onChange={this.handleImageUpload} />
</div>              
              <div>
              <button type="submit">Update</button>

              </div>
              <div>
              <button type="button" onClick={this.handleDeleteEmployee}>
                Delete
              </button>
              </div>
              
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default ManagerDashboard;
