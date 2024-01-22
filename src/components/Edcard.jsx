export default function Edcard(props){
    return(
        <>
        <div className="ed-card">
            <h4>{props.schl}</h4>
            <h5>{props.course}</h5>
            <p>{props.year}</p>
        </div>
        </>
    )
}