import React from 'react';
import AddBookForm from './components/AddBookForm';
import AddAuthorForm from './components/AddAuthorForm';
import BookSubscription from './components/BookSubscription';
import AuthorSubscription from './components/AuthorSubscription';

const App = () => {
  return (
    <div>
      <h1>GraphQL Books and Authors</h1>
      <div>
        <h2>Add a Book</h2>
        <AddBookForm />
      </div>
      <div>
        <h2>Add an Author</h2>
        <AddAuthorForm />
      </div>

      <div>
        <h2>Real-time Book Updates</h2>
        <BookSubscription />
      </div>
      <div>
        <h2>Real-time Author Updates</h2>
        <AuthorSubscription />
      </div>
    </div>
  );
};

export default App;
