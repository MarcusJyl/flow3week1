import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function Counter(props){
  const [Tal, setTal] = useState(props.start);
  
  function visCounter(){
      setTal(Tal + props.nummer)
  }
  function lowerCounter(){
      setTal(Tal - props.nummer)
  }
  useEffect(() => {
    localStorage.setItem("Tal", Tal);
  }, [Tal])
    
  
      return(
          <div>
              <button onClick={visCounter}>Hæv tal med 1</button>
              <button onClick={lowerCounter}>lower number by 1</button>
              <p>{Tal}</p>
          </div>
      )
  }


function Joke() {
  const url = 'https://icanhazdadjoke.com/'
  const[joke, setJoke]= useState('');

  useEffect(()=> {
    getJoke()
    const interval = setInterval(() => getJoke(), 10000)
    return() => {
      clearInterval(interval)
    }
  },[])

function getJoke(){
  fetch(url, {headers: { 'Accept': 'application/json'}})
    .then(res => res.json())
    .then(data => {
      setJoke(data.joke)
  })
}
return(
  <div>
    <button onClick={getJoke}>hent joke</button>
    <p>{joke}</p>
  </div>
)
}


    
function App() {
  return (
    <div className="App">
      <Counter nummer={10} start={5}/>
      <Joke/>
    </div>
  );
}

export default App;
