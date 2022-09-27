import firebase from "./config/firebase"
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from "./pages/Login";


function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={user ? <Home user={user} /> : <Login />} />
      </Routes>
    </div>
  );
}
export default App;
