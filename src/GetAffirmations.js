function GetAffirmations(props) {
    console.log(props, 'hello!');
    return(
        <section className='buttonComponent'>
            <button onClick={props.getRandomPhrase}>Get Affirmations</button>
        </section>
    )
}

export default GetAffirmations;