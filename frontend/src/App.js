import React from 'react';
import './App.css';
import './global.css';
import './frontpage.css';
import './navbar.css';
import gitLogo from './assets/GitHub-Mark-64px.png'

function App() {
  return (
    <>
    <head>

    </head>

    <body>
      <div className = "content">
        <div className = "navbar">
          
            <ul>
              <li><button className = "btn">Github</button></li>
              <li><button className = "btn">About me</button></li>
              <li><button className = "btn">Portfolio</button></li>
            </ul>
        </div>

        <div className = "frontPage">
          <h1><strong>Hello, my name is Thiago.<br/> 
          Student, and a full-stack developer.</strong></h1>
          <hr/>
        </div>

        <div className = "sideBar">
          
        </div>

      </div>
    </body>

    </>
  );
}

export default App;
