import React, {useState, useEffect} from "react";
import './LoginForm.css'

const LoginForm = ({visible, onClose}) => {

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  async function login() {
    console.warn(email, password);
    let item={email, password};
    let result = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result));
  }

  if(!visible) return null;

  return (
    <div className="main">
        <div className="container_form">
      <div className="inner_container">
        <h1 className="Login">Login</h1>
        <div className="spacer"></div>
        <div class="coolinput">
            <label for="input" class="text">Email:</label>
            <input type="text" onChange={(e)=> setEmail(e.target.value)} placeholder="email@example.com" name="input" class="input"/>
        </div>
        <div className="spacer"></div>
        <div class="coolinput">
            <label for="input" class="text">Password:</label>
            <input type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="**********" name="input" class="input"/>
        </div>
        <div className="spacer"></div>
        <div className="buttons">
          <button onClick={onClose} className="btn close">Close</button>
          <button className="btn login" onClick={login}>Login</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;