import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import EmployeeList from './components/EmployeeList';
function App() {
  return (
    <EmployeeList />
  );
}

export default App;
