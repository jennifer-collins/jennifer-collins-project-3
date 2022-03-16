function SavedAffirmations(props) {
    console.log(props.savedPhrases);
    return(
        <ul>
            {props.savedPhrases.map((phrase) => {
                return(
                    <li key={phrase.key}>
                        <p className="affirmation">{phrase.name}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default SavedAffirmations;