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
        <div className = "frontPage">
          <h1><strong>Hello, my name is Thiago.<br/> 
          Student, and a full-stack developer. <hr/></strong></h1>
         
        </div>

      <div className = "content">
        <div className = "navbar">
            <ul>
              <li><button className = "btn">Github</button></li>
              <li><button className = "btn">About me</button></li>
              <li><button className = "btn">Portfolio</button></li>
            </ul>
        </div>

        
        

      </div>
    </body>

    </>
  );
}

export default App;
