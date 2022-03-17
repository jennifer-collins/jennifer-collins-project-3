function SavedAffirmations(props) {
    return(
        <section className="savedAffirmations">
            <h3>saved affirmations</h3>
            <ul>
                {props.savedPhrases.map((phrase) => {
                    return(
                        <li key={phrase.key}>
                            {/* <button className="removeButton" onClick={() => props.deleteButton(phrase.key)}><i class="fa-solid fa-x"></i></button> */}

                            <button className="removeButton" onClick={() => props.deleteButton(phrase.key)}>remove</button>

                            <p className="affirmation">{phrase.name}</p>

                            {/* <div className="fa-stack fa-2x">
                                <i className="removeButton" class="fa-solid fa-circle fa-stack-2x" onClick={() => props.deleteButton(phrase.key)}></i>
                                <i className="removeButton" class="fa-solid fa-x fa-stack-1x fa-inverse" onClick={() => props.deleteButton(phrase.key)}></i>
                            </div> */}
                            {/* <p className="removeButton" onClick={() => props.deleteButton(phrase.key)}>x</p> */}

                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default SavedAffirmations;