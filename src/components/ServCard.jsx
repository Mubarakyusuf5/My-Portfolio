
export default function ServCard(props){
  return (
    <>
    <div className="servcard">
      <div className="icon">
        {props.icon}
      </div>
      <div className="content">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
    </>
  )
}
