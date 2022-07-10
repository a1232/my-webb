import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "../component/navigation/pageComponent/header/header";
import Banner from "../component/navigation/pageComponent/banner/banner";
import Cards from "../component/navigation/pageComponent/cards/cards";
import InputList from "../component/navigation/pageComponent/inputList/inputList";
import Home from "../component/navigation/pageComponent/pages/home";
import CourseInfo from "../component/navigation/pageComponent/pages/CourseInfo";
import Login from "../component/navigation/pageComponent/pages/login";
import { useState } from "react";

function App() {
  // for push
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
