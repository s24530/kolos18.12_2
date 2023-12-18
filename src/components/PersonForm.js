// PersonForm.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import '../PersonForm.css';

const PersonForm = ({ person, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const firstInputRef = useRef();

  useEffect(() => {
    formik.setValues({
      firstName: person.name.first,
      lastName: person.name.last,
      newSkill: '',
    });
  }, [person]);

  const formik = useFormik({
    initialValues: {
      firstName: person.name.first,
      lastName: person.name.last,
      newSkill: '',
    },
    onSubmit: (values) => {
      const updatedPerson = {
        ...person,
        name: {
          first: values.firstName,
          last: values.lastName,
        },
      };

      if (values.newSkill) {
        updatedPerson.skills = [...person.skills, values.newSkill];
      }

      onUpdate(updatedPerson);
      setIsEditing(false);
    },
  });

  useEffect(() => {
    if (isEditing) {
      firstInputRef.current && firstInputRef.current.focus();
    }
  }, [isEditing]);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setTimeout(() => {
        firstInputRef.current && firstInputRef.current.focus();
      }, 0);
    }
  };

  return (
    <div className="person-form">
      {isEditing ? (
        <form onSubmit={formik.handleSubmit}>
          <label>
            Imię:
            <input
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              ref={firstInputRef}
            />
          </label>
          <label>
            Nazwisko:
            <input
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </label>
          <label>
            Nowa umiejętność:
            <input
              type="text"
              name="newSkill"
              value={formik.values.newSkill}
              onChange={formik.handleChange}
            />
          </label>
          <button type="submit">Zapisz zmiany</button>
        </form>
      ) : (
        <button type="button" onClick={toggleEdit}>
          Edytuj
        </button>
      )}
    </div>
  );
};

export default PersonForm;
