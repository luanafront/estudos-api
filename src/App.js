
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';


function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [accountData, setAccountData] = useState({
    email: "Loading",
    first_name: "Loading", 
    last_name: "Loading",
    image_profile: "Loading",
    token: "Loading"
  })
  const [logged, setLogged] = useState(false)

  useEffect(()=>{
    let token = localStorage.getItem("LUANA_TOKEN")
    if(token !== null){
      axios.get('https://62913677665ea71fe142a512.mockapi.io/api/v1/profile/1/')
          .then((res)=>{
            let profileData = res.data
            profileData.token = token
            setAccountData(profileData)
            setLogged(true)
          })
          .catch((erro)=>console.log(erro))
    }
  }, [])

  return (
    <div className="App">
        <input onChange={(e)=>{
          setEmail(e.target.value)
        }} value={email}placeholder='email' type="email"/>

        <input value={password} onChange={(e)=>{
          setPassword(e.target.value)
        }} placeholder='senha' type="password"/>

        <input onClick={()=> {
          let data = {
            email: email,
            password: password
          }
          axios.post('https://62913677665ea71fe142a512.mockapi.io/api/v1/login/', data)
          .then((res)=>{
            let loginData = res.data
            setAccountData(loginData)
            let token = loginData.token
            localStorage.setItem("LUANA_TOKEN", token)
            setLogged(true)
          })
          .catch((erro)=>console.log(erro))

        }} value='Login' type="submit"/>
        <p>{logged ? "Logged" : "No Logged"}</p>
        <div>
          <h1>Account</h1>
          <p>Email: {accountData.email}</p>
          <p>First Name: {accountData.first_name}</p>
          <p>Last Name: {accountData.last_name}</p>
          <p>Image : <img src={accountData.image_profile}/></p>
          <p>Token: {accountData.token}</p>
        </div>
        <button onClick={()=>{
          localStorage.clear()
          setLogged(false)
          setAccountData({
            email: "Loading",
            first_name: "Loading", 
            last_name: "Loading",
            image_profile: "Loading",
            token: "Loading"
          })
        }}>
        Log out</button>
    </div>
  );
}

export default App;
