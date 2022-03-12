import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayAffirmations from './DisplayAffirmations';

function App() {

  // Save API data in STATE
  const [affirmationData, setAffirmationData] = useState({});
  const [affirmation, setAffirmation] = useState('');

  // Make the API call using axios/useEffect
  useEffect( () => {
    axios({
      url: "https://dulce-affirmations-api.herokuapp.com/affirmation/index",
      method: "GET",
      dataResponse: "json"
    }).then( (dataResponse) => {
      console.log(dataResponse);
      
      // This is saving the data from the API in state
      setAffirmationData(dataResponse.data)
    })
  }, [])

  const handleClick = () => {
    console.log('I am clicked!');
    // console.log(affirmationData[2]);
    // on click randomizer function will run - using math.random to
    const randomAffirmation = affirmationData[Math.floor(Math.random()*affirmationData.length)]
    console.log(randomAffirmation);
    setAffirmation(randomAffirmation.phrase)
  }
  console.log(affirmation);
  
  return (
    <div>
      <header>
        {/* App title/header */}
        <h1>words of affirmation</h1>
        {/* App description */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloremque labore et obcaecati esse veniam inventore voluptatem, nihil nulla itaque!</p>
      </header>

      <section>

        {/* If I add this to it's own component this is how i would pass the info/function via props */}
        {/* <button onClick={props.getRandomPhrase}>Get Affirmations</button> */}

        <button onClick={handleClick}>Get Affirmation</button>
        {/* <Button getRandomPhrase={handleClick}/> */}
        {/* {
          affirmationData.map((affirmation) => {
            return(
              <p>{affirmation.phrase}</p>
            )
          })
        } */}
      </section>

      <section>
        <DisplayAffirmations affirmationPhrase={affirmation}/>
      </section>

    </div>
  );
}

export default App;

// Make API call with axios in useEffect hook (this call will happen in App.js)
    // API call will happen on page load, but data will not display until button is clicked

// Create state items to hold data returned from the Affirmations API
    // Data will be randomized using:
         // Math.floor(Math.random * array.length) (?) to get a random index in the array (between 0-260)

// Add onClick event listener to button which will trigger the DisplayAffirmations component which holds the data from the API in state
    // Call the set function from our state here

// With each click of the button, DisplayAffirmations component will re-render on the page - displaying a new affirmation and clearing the previous affirmation