import React, { useState, useEffect } from 'react';
import './SubjectRegistrationForm.css';

const SubjectRegistrationForm = ({ addRegistration, editIndex, registrations }) => {
  // Define state to manage form data
  const [formData, setFormData] = useState({
    studentName: '',
    selectedSubject: '',
  });

  // Use useEffect to pre-fill the form when editing
  useEffect(() => {
    // Check if editIndex is not null and registrations array is not empty
    if (editIndex !== null && registrations.length > 0) {
      // Retrieve the data of the registration being edited
      const editedRegistration = registrations[editIndex];
      // Pre-fill the form fields with the data of the registration
      setFormData(editedRegistration);
    }
  }, [editIndex, registrations]);

  // Handle changes in form inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update the state with the new input value
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the provided function to add the registration data
    addRegistration(formData);
    // Reset the form fields
    setFormData({ studentName: '', selectedSubject: '' });
  };

  return (
    <div className="registration-form">
      <h2 className="form-heading">Subject Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="studentName" className="label-text">
            Student Name
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            placeholder="Enter Student Name"
            value={formData.studentName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="selectedSubject" className="label-text">
            Select a Subject
          </label>
          <select
            id="selectedSubject"
            name="selectedSubject"
            value={formData.selectedSubject}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select a Subject
            </option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default SubjectRegistrationForm;
