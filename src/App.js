import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayAffirmations from './DisplayAffirmations';
import GetAffirmations from './GetAffirmations';

// Firebase Imports
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';
import firebase from './firebase';
import SavedAffirmations from './SavedAffirmations';

function App() {

  // Save API data in STATE
  const [affirmationData, setAffirmationData] = useState({});
  const [affirmation, setAffirmation] = useState('');

  //Firebase Data in STATE
  const [returnedPhrases, setReturnedPhrases] = useState([]);

  // Make the API call using axios/useEffect
  useEffect( () => {
    axios({
      url: "https://dulce-affirmations-api.herokuapp.com/affirmation/index",
      method: "GET",
      dataResponse: "json"
    }).then( (dataResponse) => {
      
      // This is saving the data from the API in state
      setAffirmationData(dataResponse.data)
    })
  }, [])

  const handleClick = () => {
    console.log('I am clicked!');
    const randomAffirmation = affirmationData[Math.floor(Math.random()*affirmationData.length)]
    setAffirmation(randomAffirmation.phrase)
  }


  //FIREBASE

  useEffect(() => {
    const database = getDatabase(firebase)
    const dbRef = ref(database)
    onValue(dbRef, (response) => {
      const savedArray = []
      const data = response.val()
      for (let propertyName in data) {
      savedArray.push({
        key: propertyName,
        name: data[propertyName]
      });
    }
    setReturnedPhrases(savedArray);
    });
  }, [])


  const handleFirebase = () => {
    console.log('click here!');
    const database = getDatabase(firebase)
    const dbRef = ref(database)
    push(dbRef, affirmation)
  }

  const handleRemovePhrase = (phraseKey) => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `/${phraseKey}`)
    remove(dbRef)
  }
  
  return (
    <div className='app'>
      <header className='wrapper'>
        {/* App title/header */}
        <h1>af·firm·a·tion</h1>
        <h3><span className='number'>(1)</span> the act of affirming</h3>
        <h3><span className='number'>(2)</span> something affirmed<span className='nextLine'> - a positive assertion</span></h3>
        {/* App description */}
        <div className="appDescription">
        <p>Affirmations are positive reminders to motivate yourself, encourage positive changes in your life, or combat negative thoughts.</p>
        <p>Sometimes life can be a little tough, and these affirmations can help to shift your mindset. Click the button below to find an affirmation that speaks to you. If you come across one that does, save it to the list below to share with others.</p>
        </div>

        {/* Button Component Import */}
        <GetAffirmations getRandomPhrase={handleClick} />
      </header>


        {/* If I add this to it's own component this is how i would pass the info/function via props */}
        {/* <button onClick={props.getRandomPhrase}>Get Affirmations</button> */}

        {/* This was the original solution */}
        {/* <button onClick={handleClick}>Get Affirmation</button> */}
        
        {/* <GetAffirmations getRandomPhrase={handleClick}/> */}
        {/* {
          affirmationData.map((affirmation) => {
            return(
              <p>{affirmation.phrase}</p>
            )
          })
        } */}
      <main className='wrapper'>
          <DisplayAffirmations
            affirmationPhrase={affirmation}
            saveButton={handleFirebase}
          />
        
        <SavedAffirmations
          savedPhrases={returnedPhrases}
          deleteButton={handleRemovePhrase}
        />
      </main>
      <footer>
        <p>Created by <a href="https://github.com/jennifer-collins" target="blank" rel="noopener noreferrer">Jennifer Collins</a> at <a target="_blank" rel="noopener noreferrer" href="https://junocollege.com/">Juno College</a></p>
      </footer>
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