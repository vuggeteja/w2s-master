import React, { Component } from 'react';

class EmployeeDashboard extends Component {
  state = {
    skills: [],
    selectedSkill: null,
    skillDetails: {
      name: '',
      level: '',
    },
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      skillDetails: {
        ...prevState.skillDetails,
        [name]: value,
      },
    }));
  };

  handleAddSkill = (e) => {
    e.preventDefault();
    const { skills, skillDetails } = this.state;

    // Perform validation on skill details
    if (skillDetails.name === '' || skillDetails.level === '') {
      alert('Please enter all skill details.');
      return;
    }

    // Add skill to the list
    const newSkill = { ...skillDetails };
    skills.push(newSkill);

    this.setState({
      skills,
      skillDetails: {
        name: '',
        level: '',
      },
    });
  };

  handleSelectSkill = (skill) => {
    this.setState({
      selectedSkill: skill,
    });
  };

  handleUpdateSkill = (e) => {
    e.preventDefault();
    const { selectedSkill, skillDetails, skills } = this.state;

    // Perform validation on skill details
    if (skillDetails.name === '' || skillDetails.level === '') {
      alert('Please enter all skill details.');
      return;
    }

    // Update selected skill details
    const updatedSkill = { ...selectedSkill, ...skillDetails };
    const updatedSkills = skills.map((skill) => (skill === selectedSkill ? updatedSkill : skill));

    this.setState({
      skills: updatedSkills,
      selectedSkill: updatedSkill,
      skillDetails: {
        name: '',
        level: '',
      },
    });
  };

  handleDeleteSkill = () => {
    const { selectedSkill, skills } = this.state;

    // Remove selected skill from the list
    const updatedSkills = skills.filter((skill) => skill !== selectedSkill);

    this.setState({
      skills: updatedSkills,
      selectedSkill: null,
    });
  };

  render() {
    const { skills, selectedSkill, skillDetails } = this.state;

    return (
      <div className='parent'>
        <h2 align='center'>Employee Dashboard</h2>

        {/* Add Skill Form */}
        
        <form onSubmit={this.handleAddSkill}>
        <h3 align='center'>Add Skill</h3>
          <input
            type="text"
            name="name"
            value={skillDetails.name}
            onChange={this.handleInputChange}
            placeholder="Name"
          />
          <div>
          <input
            type="text"
            name="level"
            value={skillDetails.level}
            onChange={this.handleInputChange}
            placeholder="Level"
          />
          </div>
          
          <div>
          <button type="submit">Add</button>

          </div>
        </form>

        {/* Skill List */}
        <h3 align='center'>Skill List</h3>
        <ul>
          {skills.map((skill) => (
            <li key={skill.name} align='center' onClick={() => this.handleSelectSkill(skill)}>
              {skill.name}
            </li>
          ))}
        </ul>

        {/* Selected Skill Details */}
        {selectedSkill && (
          <div>
            <h3>Selected Skill Details</h3>
            <p>Name: {selectedSkill.name}</p>
            <p>Level: {selectedSkill.level}</p>

            {/* Update Skill Form */}
            
            <form onSubmit={this.handleUpdateSkill}>
            <h3 align='center'>Update Skill</h3>
            <div>
            <input
                type="text"
                name="name"
                value={skillDetails.name}
                onChange={this.handleInputChange}
                placeholder="Name"
              />
            </div>
             
              <div>
              <input
                type="text"
                name="level"
                value={skillDetails.level}
                onChange={this.handleInputChange}
                placeholder="Level"
              />
              </div>
              <br />
              <div>
              <button type="submit">Update</button>
              </div>
              <br />
              <div>
              <button type="button" onClick={this.handleDeleteSkill}>
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

export default EmployeeDashboard;
