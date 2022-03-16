import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayAffirmations from './DisplayAffirmations';
import GetAffirmations from './GetAffirmations';

// Firebase Import
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


  //FIREBASE

  useEffect(() => {
    const database = getDatabase(firebase)
    const dbRef = ref(database)
    onValue(dbRef, (response) => {
      console.log(response.val());
      const savedArray = []
      const data = response.val()
      for (let propertyName in data) {
      savedArray.push({
        key: propertyName,
        name: data[propertyName]
      });
      console.log(savedArray);
    }
    setReturnedPhrases(savedArray);
    });
  }, [])
  console.log(returnedPhrases);


  const handleFirebase = () => {
    console.log('click here!');
    const database = getDatabase(firebase)
    const dbRef = ref(database)
    push(dbRef, affirmation)
    // console.log(affirmation);
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
        {/* <h1>words of affirmation</h1> */}
        <h1>af·firm·a·tion</h1>
        {/* <h3>the action or process of affirming something or being affirmed.</h3> */}
        <h3>(1) the act of affirming</h3>
        <h3>(2) something affirmed - a positive assertion</h3>
        {/* App description */}
        <div className="appDescription">
        <p>Affirmations are positive reminders to motivate yourself, encourage positive changes in your life, or combat negative thoughts.</p>
        <p>Sometimes life can be a little tough, and these affirmations can help to shift your mindset. Click the button below to find an affirmation that speaks to you.</p>
        </div>

        {/* Button Component Import */}
        <GetAffirmations getRandomPhrase={handleClick} />
      </header>

      {/* <section className='buttonComponent'> */}

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
      {/* </section> */}
      <main className='wrapper'>
        {/* <section className='displayAffirmations'> */}
          <DisplayAffirmations affirmationPhrase={affirmation}
            saveButton={handleFirebase}
          />
        {/* </section> */}
        
        <SavedAffirmations savedPhrases={returnedPhrases}
        deleteButton={handleRemovePhrase}
        />
      </main>
      <footer>
        <p>Created by Jennifer Collins at Juno College</p>
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