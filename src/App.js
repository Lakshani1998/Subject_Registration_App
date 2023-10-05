import React, { useState } from 'react';
import './App.css';
import SubjectRegistrationForm from './components/SubjectRegistrationForm';
import SubjectTable from './components/SubjectTable';
import SubjectChart from './components/SubjectChart';
import Button from './components/Button';

function App() {
  const [registrations, setRegistrations] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addRegistration = (newRegistration) => {
    if (editIndex !== null) {
      // If an edit index is set, update the existing registration
      const updatedRegistrations = [...registrations];
      updatedRegistrations[editIndex] = newRegistration;
      setRegistrations(updatedRegistrations);
      setEditIndex(null); // Reset the edit index
    } else {
      // Otherwise, add a new registration
      setRegistrations([...registrations, newRegistration]);
    }
  };

  const deleteRegistration = (index) => {
    const updatedRegistrations = [...registrations];
    updatedRegistrations.splice(index, 1);
    setRegistrations(updatedRegistrations);
  };

  const editRegistration = (index) => {
    setEditIndex(index); // Set the edit index to enable editing
  };

  const clearRegistrations = () => {
    setRegistrations([]);
    setEditIndex(null); // Reset the edit index when clearing registrations
  };

  return (
    <div className="App">
      <h1>Subject Registration App</h1>
      <SubjectRegistrationForm
        addRegistration={addRegistration}
        editIndex={editIndex}
        registrations={registrations}
      />
      <div className="button-container">
        <Button
          id="button"
          onClick={clearRegistrations}
          label="Refresh"
          style={{ color: '#000B4F' }}
        />
      </div>

      <SubjectTable
        registrations={registrations}
        onDelete={deleteRegistration}
        onEdit={editRegistration}
      />
      <SubjectChart registrations={registrations} />
    </div>
  );
}

export default App;
