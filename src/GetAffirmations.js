function GetAffirmations(props) {
    console.log(props, 'hello!');
    return(
        <button onClick={props.getRandomPhrase}>Get Affirmations</button>
    )
}

export default GetAffirmations;