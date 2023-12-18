// PersonList.jsx
import React from 'react';
import Person from './Person';

const PersonList = ({ people, onUpdatePerson }) => {
  return (
    <ul className="person-list">
      {people.map((person) => (
        <Person
          key={person.id}
          person={person}
          onUpdatePerson={onUpdatePerson}
        />
      ))}
    </ul>
  );
};

export default PersonList;
