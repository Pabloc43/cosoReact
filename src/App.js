import Header from "./components/Header";
import {useState} from 'react';
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Parrafo from "./components/Parrafo";

function App() {

  const [isLogged, setIsLogged] = useState(false);
  cinst userLogInInfo = localStorage.getItem("")


  function handleLogIn(){
    localStorage.setItem("LoggedIn", "true")
    setIsLogged(true)
  }

  function handleLogOut(){
    setIsLogged(false)
  }

  return (
    <div className="App">
      <Header isLogged={isLogged} onHandle={handleLogOut}/>
      <main className="container">
        {!isLogged && <LogIn onLogin={handleLogIn} />}
      </main>
    </div>
  );
}

export default App;
