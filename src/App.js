
import React from 'react';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import Search from './components/Search';
import Table from './components/Table';

function App() { 
  
  return (
    <div className="container">
      <Header />
      <Search />
      <Input />
      <Table />

 
    </div>
  );
}

export default App;
