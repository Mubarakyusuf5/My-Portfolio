import Edcard from "./Edcard";

export default function Educaion() {
    return(
        <>
        <div className="ed">
            <h2>Education</h2>
            <div className="grid">
                <Edcard schl="Al Qalam University, Katsina" course="Bs.c Software Engineering" year="2022-2025" />
                <Edcard schl="School Of Basic And Remedial Studies, Funtua" course="Remedial Result" year="2021"/>
                <Edcard schl="Police Boy's Secondary School, Mani" course="SSCE Certificate" year="2017-2020"/>
                <Edcard schl="Saldefi International School, Katsina" course="Primary School Certificate" year="2006-2014"/>
            </div>
        </div>
        </>
    )
}