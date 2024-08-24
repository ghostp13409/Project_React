import "./App.css";
import { Link, Outlet } from "react-router-dom";


export function Nav() {
  return(
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export function Home() {
  return (
    <div>
      <Nav />
      <h1>My Website</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <Nav />
      <h1>About Us</h1>
      <Outlet />
    </div>
  );
}

export function History() {
  return (
    <div>
      <h1>Our History</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <Nav />
      <h1>Contact Us</h1>
    </div>
  );
}


export function App() {
  return (
    <Home />
);
}
