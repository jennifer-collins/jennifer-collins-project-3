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