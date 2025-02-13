const Lista = (props) => {
    {props.emojis.map((i) => {return(
        <div className="emojis">{props.emojis[i]}</div>
    )})}
}

export default Lista;