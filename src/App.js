import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import divider from "./advice-generator-app-main/images/pattern-divider-desktop.svg"
import button from "./advice-generator-app-main/images/icon-dice.svg"
function App() {
  const [advice, setAdvice] = useState('');
  useEffect(() => {
    fetchAdvice();
  }, []);
 

  const fetchAdvice = useCallback(async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice', { 
        method: 'GET', 
        mode: 'cors', 
        cache: 'no-cache' 
      });
  
      if (response.ok) {
        const data = await response.json();
        const adviceText = data.slip;
        setAdvice(adviceText);
        
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.log('Error fetching advice:', error);
    }
  }, []);
 

  return (
    <div className="App">
      <div className="app-container">
        <div>
        <div className="id-container">
        ADVICE #{advice.id}
        </div>
       <div className="advice-container">
       {advice.advice}

       </div>
      <div className="dvider">
        <img src={divider} alt="divider"/>
      </div>
      <div className="button-container">
      <button onClick={fetchAdvice}>
        <img src={button} alt="button"/>
      </button>
      </div>
    </div>
    </div>
    <footer>
        <p class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded with ❤️ by <a href="https://3d-portofolio-seven.vercel.app/">Saad Hisham </a>.
        </p>
      </footer>
    </div>
  );
}

export default App;


