import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_AUTHOR = gql`
  mutation AddAuthor($name: String!, $age: Int) {
    addAuthor(name: $name, age: $age) {
      id
      name
      age
    }
  }
`;

const AddAuthorForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [addAuthor] = useMutation(ADD_AUTHOR);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addAuthor({ variables: { name, age: parseInt(age) } });
    setName('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <button type="submit">Add Author</button>
    </form>
  );
};

export default AddAuthorForm;
