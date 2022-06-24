// import './Components/sass/nav.scss'
// import teamLogo from "../Components/images/new4.png"
export const NavbarSection = () => {
    return (
        <header className="navbar navbar-expand-sm navling ">

            <div className="container">

                <a href="#" className="navbar-brand">
             {/* <img src={teamLogo}></img> */}
                </a>
         
                <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                class="navbar-toggler" aria-controls="navbarNav" aria-expanded="false"
                aria-label="toggle-navigation">
                <span class="navbar-toggler-icon ms-auto"></span>
                </button>
            
                <div className="small ms-auto">
    
                    <div clasName
                    ="collapse navbar-collapse" id="navbarNav">
                        <ul className="nav">
                         <li className="nav-item">
                             <a className="nav-link text-white mx-3" role="button" href="#">Home</a>
                         </li>
                 
                         <li className="nav-item">
                             <a className="nav-link text-white mx-3" role="button">About</a>
                         </li>
                 
                         <li className="nav-item">
                             <a className="nav-link text-white mx-3" role="button">Contact</a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link text-white mx-3" role="button">Services</a>
                         </li>
                 
                         <div className="dropdown mt-2">
                             <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2"
                                 data-bs-toggle="dropdown" aria-expanded="false">
                                 Sign In
                             </button>
                             <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                 <li><a className="dropdown-item " href="#">COUNSELLORS</a></li>
                                 <li><a className="dropdown-item" href="#">INDIVIDUALS</a></li>
                 
                             </ul>
                        </div>
                     
                    </ul>
                </div>
            </div>
        </div>


       
    </header>

    )
}
