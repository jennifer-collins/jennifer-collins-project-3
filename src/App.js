import './App.css';

function App() {
  return (
    <div>
      <header>
        {/* App title/header */}
        <h1>words of affirmation</h1>
        {/* App description */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloremque labore et obcaecati esse veniam inventore voluptatem, nihil nulla itaque!</p>
      </header>
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