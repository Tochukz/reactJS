const Instructions = ({title, steps}) =>
    <section className="instructions">
        <h4>{title}</h4>
        {
            steps.map((step, i) =>
                 <p key={i}>{step}</p>
            )
        }
    </section>
export default Instructions;
