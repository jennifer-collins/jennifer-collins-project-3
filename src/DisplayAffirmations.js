function DisplayAffirmations(props) {
    console.log(props);
    return(
        <p className="affirmation typewriter">{props.affirmationPhrase}</p>
    )
}

export default DisplayAffirmations;