// import {useEffect, useState} from 'react'

function DisplayAffirmations(props) {
    console.log(props);
    // console.log(props.emptyPhrase);
    // const emptyPhrase = props.affirmationPhrase

    // const [displayPhrase, setDisplayPhrase] = useState(false)
    
    // useEffect(() => {
    //     if (props.affirmationPhrase == "") {
    //         setDisplayPhrase(false)
    //     } else {
    //         setDisplayPhrase(true)
    //     }

    // }, [props])
    
    return(
        <div>

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
        
        
        </div>
        
        // <p className="affirmation typewriter">{props.affirmationPhrase}</p>
    )
}

export default DisplayAffirmations;