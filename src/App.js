import React from "react";
import {useState, useEffect} from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import NavbarComponent from "./components/nav/navbar";

function App() {
const [state, setState] = useState(null);
useEffect(() => {
fetch("https://lab5-portfolio.netlify.app/.netlify/functions/api")
.then((response) => response.json())
.then((data) => setState(data))
.catch((error) => console.error("Error fetching data:", error));
}, []);

return (
  <>
  <NavbarComponent />
  <Header />
  <div className="container text-center">
    <h1>Welcome to My Full-Stack App </h1>
    <p>This is a React app styled with Bootstrap 5.</p>
    {state ? <p>{state.message}</p> : <p>Loading...</p>}
  </div>
  <Footer/>
  </>
);
}
export default App;

