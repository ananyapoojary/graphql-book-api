import React from 'react';
import { useSubscription, gql } from '@apollo/client';

const BOOK_ADDED = gql`
  subscription {
    bookAdded {
      id
      title
      genre
    }
  }
`;

const BookSubscription = () => {
  const { data, loading, error } = useSubscription(BOOK_ADDED);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h3>New Book Added:</h3>
      <div><strong>{data.bookAdded.title}</strong> - {data.bookAdded.genre}</div>
    </div>
  );
};

export default BookSubscription;
