// import {useEffect, useState} from 'react'

function DisplayAffirmations(props) {
    
    return(
        <section className='displayAffirmations'>

            {/* {
                
                displayPhrase ?
                <p className="affirmation typewriter">{props.affirmationPhrase}</p>
                : null    
            } */}

        {
        props.affirmationPhrase !== "" ? 
        <div>
            <p className="affirmation typewriter">{props.affirmationPhrase}</p>
            <button onClick={props.saveButton}>Save Affirmation</button>
        </div>
            : null
        }
        
        </section>
        
        // <p className="affirmation typewriter">{props.affirmationPhrase}</p>
    )
}

export default DisplayAffirmations;