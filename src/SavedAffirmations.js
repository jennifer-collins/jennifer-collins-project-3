function SavedAffirmations(props) {
    console.log(props.savedPhrases);
    return(
        <section className="savedAffirmations">
            <h3>saved affirmations</h3>
            <ul>
                {props.savedPhrases.map((phrase) => {
                    return(
                        <li key={phrase.key}>
                            <p className="affirmation">{phrase.name}</p>
                            <button className="removeButton" onClick={()=> props.deleteButton(phrase.key)}>remove</button>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default SavedAffirmations;