import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try { 
        const hhev = await axios.get('alldata');
        console.log( hhev)
      }
      catch (error) {
        console.log(error);
        }
    }
    fetchData()
  })
  return (
    <div className="App">
      <div>
        hello world
      </div>
    </div>
  );
}

export default App;
