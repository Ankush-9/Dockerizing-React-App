import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to Telusko Learning</h1>
        <p>Empowering Developers to Learn and Grow 🚀</p>
      </header>

      <section className="courses">
        <h2>Our Live Courses</h2>
        <ul>
          <li>🤖 AI Engineering</li>
          <li>☁️ DevOps with AWS</li>
          <li>☕ Java Spring Boot with AWS</li>
          <li>🎓 Udemy Recorded Courses</li>
        </ul>
      </section>

      <footer className="footer">
        <p>
          Visit us at <a href="https://telusko.com" target="_blank" rel="noreferrer">telusko.com</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
