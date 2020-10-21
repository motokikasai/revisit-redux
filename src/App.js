import React from 'react';
import './App.css';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';
// import Button from './components/Buttons';

function App() {
  return (
    <div className='App'>
      {/* <h1 style={{ color: '#ad5a5a' }}>Redux Typical Counter</h1> */}
      {/* <Button /> */}
      <h1>Redux Typical To-do App!</h1>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
