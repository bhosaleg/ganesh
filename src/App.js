// import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import { Login } from './Component/Login';
import Signup from './Component/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <Login />
      <Home />
      <Signup /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;






