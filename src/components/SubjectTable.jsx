import React from 'react';
import './SubjectTable.css';

const SubjectTable = ({ registrations, onDelete, onEdit }) => {
  return (
    <div className="subject-table">
      {/* Table Heading  */}
      <h2 className="table-heading">Subject Registrations</h2>
      {/* Table */}
      <table className="registration-table">
        <thead>
          <tr>
            {/* Table Headers */}
            <th className="table-header">Student Name</th>
            <th className="table-header">Subject</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Table Body */}
          {registrations.map((registration, index) => (
            <tr key={index}>
              {/* Table Data */}
              <td>{registration.studentName}</td>
              <td>{registration.selectedSubject}</td>
              <td>
              <button className="edit-button" onClick={() => onEdit(index)}>Edit</button>
              <button className="delete-button" onClick={() => onDelete(index)}>Delete</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectTable;
