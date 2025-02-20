import React from 'react';
import { useSubscription, gql } from '@apollo/client';

const AUTHOR_ADDED = gql`
  subscription {
    authorAdded {
      id
      name
      age
    }
  }
`;

const AuthorSubscription = () => {
  const { data, loading, error } = useSubscription(AUTHOR_ADDED);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h3>New Author Added:</h3>
      <div><strong>{data.authorAdded.name}</strong> - Age: {data.authorAdded.age}</div>
    </div>
  );
};

export default AuthorSubscription;
