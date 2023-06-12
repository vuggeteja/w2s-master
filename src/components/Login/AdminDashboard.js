import React, { Component } from 'react';
import './admin.min.css';

class AdminDashboard extends Component {
  state = {
    managers: [],
    employees: [],
    selectedManager: null,
    selectedEmployee: null,
    managerDetails: {
      name: '',
      email: '',
    },
    employeeDetails: {
      name: '',
      email: '',
    },
  };

  handleManagerInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      managerDetails: {
        ...prevState.managerDetails,
        [name]: value,
      },
    }));
  };

  handleEmployeeInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      employeeDetails: {
        ...prevState.employeeDetails,
        [name]: value,
      },
    }));
  };

  handleAddManager = (e) => {
    e.preventDefault();
    const { managers, managerDetails } = this.state;

    // Perform validation on manager details
    if (managerDetails.name === '' || managerDetails.email === '') {
      alert('Please enter all manager details.');
      return;
    }

    // Add manager to the list
    const newManager = { ...managerDetails };
    managers.push(newManager);

    this.setState({
      managers,
      managerDetails: {
        name: '',
        email: '',
      },
    });
  };

  handleAddEmployee = (e) => {
    e.preventDefault();
    const { employees, employeeDetails } = this.state;

    // Perform validation on employee details
    if (employeeDetails.name === '' || employeeDetails.email === '') {
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
      },
    });
  };

  handleSelectManager = (manager) => {
    this.setState({
      selectedManager: manager,
    });
  };

  handleSelectEmployee = (employee) => {
    this.setState({
      selectedEmployee: employee,
    });
  };

  handleUpdateManager = (e) => {
    e.preventDefault();
    const { selectedManager, managerDetails, managers } = this.state;

    // Perform validation on manager details
    if (managerDetails.name === '' || managerDetails.email === '') {
      alert('Please enter all manager details.');
      return;
    }

    // Update selected manager details
    const updatedManager = { ...selectedManager, ...managerDetails };
    const updatedManagers = managers.map((manager) =>
      manager === selectedManager ? updatedManager : manager
    );

    this.setState({
      managers: updatedManagers,
      selectedManager: updatedManager,
      managerDetails: {
        name: '',
        email: '',
      },
    });
  };

  handleUpdateEmployee = (e) => {
    e.preventDefault();
    const { selectedEmployee, employeeDetails, employees } = this.state;

    // Perform validation on employee details
    if (employeeDetails.name === '' || employeeDetails.email === '') {
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
      },
    });
  };

  handleDeleteManager = () => {
    const { selectedManager, managers } = this.state;

    // Remove selected manager from the list
    const updatedManagers = managers.filter((manager) => manager !== selectedManager);

    this.setState({
      managers: updatedManagers,
      selectedManager: null,
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
    const { managers, employees, selectedManager, selectedEmployee, managerDetails, employeeDetails } = this.state;

    return (
      <div className="parent">
        <h2 align='center'>Admin Dashboard</h2>

        {/* Add Manager Form */}
        <form onSubmit={this.handleAddManager}>
        <h3 align='center'>Add Manager</h3>

          <div>
          <input
            type="text"
            name="name"
            value={managerDetails.name}
            onChange={this.handleManagerInputChange}
            placeholder="Name"
          />
          </div>
         <br />
          <div>
          <input
            type="text"
            name="email"
            value={managerDetails.email}
            onChange={this.handleManagerInputChange}
            placeholder="Email"
          />
          </div>
          
          
          <br />
          <button type="submit">Add Manager</button>
        </form>

        {/* Manager List */}
        <h3 align='center'>Manager List</h3>
        <ul>
          {managers.map((manager) => (
            <li align='center' style={{marginLeft: '-17px'}} key={manager.email} onClick={() => this.handleSelectManager(manager)}>
              {manager.name}
            </li>
          ))}
        </ul>

        {/* Selected Manager Details */}
        {selectedManager && (
          <div >
            <h3 align='center'>Selected Manager Details</h3>
            <p align='center'>Name: {selectedManager.name}</p>
            <p align='center'>Email: {selectedManager.email}</p>

            {/* Update Manager Form */}
          
            <form onSubmit={this.handleUpdateManager}>
            <h3 align='center'>Update Manager</h3>
              <div>
              <input
                type="text"
                name="name"
                value={managerDetails.name}
                onChange={this.handleManagerInputChange}
                placeholder="Name"
              />
              
              </div>
              <br />
              <div>
              <input
                type="text"
                name="email"
                value={managerDetails.email}
                onChange={this.handleManagerInputChange}
                placeholder="Email"
              />
              
              </div>
              
              <div style={{marginTop:'8px'}}>
              <button type="submit">Update Manager</button>

              </div>
              <div style={{marginTop:'8px'}}>
              <button type="button" onClick={this.handleDeleteManager}>Delete Manager</button>

              </div>
            </form>
          </div>
        )}

        {/* Add Employee Form */}
       
        <form onSubmit={this.handleAddEmployee}>
        <h3 align='center'>Add Employee</h3>
          <div>
          <input
            type="text"
            name="name"
            value={employeeDetails.name}
            onChange={this.handleEmployeeInputChange}
            placeholder="Name"
          />
          </div>
          
          <br />
          <div>
          <input
            type="text"
            name="email"
            value={employeeDetails.email}
            onChange={this.handleEmployeeInputChange}
            placeholder="Email"
          />
          </div>
         
          <br />
          <button type="submit">Add Employee</button>
        </form>

        {/* Employee List */}
        <h3 align='center'>Employee List</h3>
        <ul>
          {employees.map((employee) => (
            <li align='center' key={employee.email} style={{marginLeft: '-17px'}} onClick={() => this.handleSelectEmployee(employee)}>
              {employee.name}
            </li>
          ))}
        </ul>

        {/* Selected Employee Details */}
        {selectedEmployee && (
          <div>
            <h3 align='center'>Selected Employee Details</h3>
            <p align='center'>Name: {selectedEmployee.name}</p>
            <p align='center'>Email: {selectedEmployee.email}</p>

            {/* Update Employee Form */}
            
            <form onSubmit={this.handleUpdateEmployee}>
            <h3 align='center'>Update Employee</h3>
            <div>
            <input
                type="text"
                name="name"
                value={employeeDetails.name}
                onChange={this.handleEmployeeInputChange}
                placeholder="Name"
              />
            </div>
              
              <br />
              <div>
              <input
                type="text"
                name="email"
                value={employeeDetails.email}
                onChange={this.handleEmployeeInputChange}
                placeholder="Email"
              />
              </div>
              
              <div style={{marginTop:'8px'}}>
              <button type="submit">Update Employee</button>

              </div>
              
              <div style={{marginTop:'8px'}}>
              <button type="button" onClick={this.handleDeleteEmployee}>Delete Employee</button>

              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default AdminDashboard;
