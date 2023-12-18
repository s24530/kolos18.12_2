// Person.jsx
import React from 'react';
import PersonForm from './PersonForm';
import '../Person.css';

const Person = ({ person, onUpdatePerson }) => {
  return (
    <li className="person-item">
      <div>
        <p>
          <strong>Name:</strong> {person.name.first} {person.name.last}{' '}
          <strong>Location:</strong> {person.location}
        </p>
        <ul>
          {person.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <PersonForm person={person} onUpdate={onUpdatePerson} />
    </li>
  );
};

export default Person;
