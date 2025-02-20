import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_BOOK = gql`
  mutation AddBook($title: String!, $genre: String, $authorId: ID!) {
    addBook(title: $title, genre: $genre, authorId: $authorId) {
      id
      title
      genre
    }
  }
`;

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [addBook] = useMutation(ADD_BOOK);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBook({ variables: { title, genre, authorId } });
    setTitle('');
    setGenre('');
    setAuthorId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
      <input type="text" placeholder="Author ID" value={authorId} onChange={(e) => setAuthorId(e.target.value)} required />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
