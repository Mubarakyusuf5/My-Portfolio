

export default function Nav(){
    return(
        <nav>
            <div className="logo">LOGO</div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                {/* <li><a href="#">Skills</a></li> */}
                <li><a href="#education">Educaion</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}