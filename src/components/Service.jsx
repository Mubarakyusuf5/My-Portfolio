import ServCard from "./ServCard";


export default function Service(){
  return (
    <>
    <div className="service" id="service">
        <h2>My Services</h2>
        <div className="line serv"></div>
        <div className="servgrid">
            <ServCard title="serv development" desc="" />
            <ServCard title="" desc="" />
            <ServCard title="" desc="" />
        </div>
    </div>
    </>
  )
}
