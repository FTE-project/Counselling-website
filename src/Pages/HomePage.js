import { HomeHero } from "../Components/Hero";
// import carimg from "..../";
import carImg from "../images/top vector.png";
import carImg1 from "../images/lower vector.png";
import  {NavbarSection} from "../Components/Navbar";

const HomePage = () => {
    return (  
        <section className="section">
             <NavbarSection/>
            <HomeHero/>
            <div className="sec-2">
                <h3 className="text-center">MINDAFRIK</h3>
                <div className="w-50 m-auto">
                <p>At MindAfrik,we provide affordable therapy to the
diverse African communities, we address community needs through projects
that see our clients as whole persons in society. Our goal is to empower
everyday people to tell their story, understand themselves, and make a
difference in their lives and their communities.Sometimes it takes dealing with a disability - the trauma, the relearning, the
months of rehabilitation therapy to uncover our true abilities and how we can put
them to work for us in ways we may have never imagined.</p>
</div>
            </div>
            <div className="row d-flex justify-content-between bg m-0 ">
                <div className="col-md-6 d-none d-md-block d-sm-none">button</div>
                <div className="col-md-6 col-sm-12 bt-text">
                    <h3>“Words of comfort, skillfully administered are the oldest therapy known to man”-Louis Nizer.</h3>
                    <h3>“Laughing is psychological therapy and crying is emotional therapy”. Tom Althouse.</h3>
                    <div className="d-none d-sm-block d-md-none">button</div>
                    </div>
            </div>
            <div className="row m-0 sec-4">
                <div className="col-md-4 col-sm-12">
                    <h4>Mental Health</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                </div>
                <div className="col-md-4 d-none d-md-block d-sm-none"><img src={carImg} alt="" /></div>
                <div className="col-md-4 col-sm-12"> <h4>Career</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p></div> 
            </div>
            <div className="row m-0 sec-4">
                <div className="col-md-4 col-sm-12">
                    <h4>Relationship</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                </div>
                <div className="col-md-4 d-none d-md-block d-sm-none"><img src={carImg1} alt="" /></div>
                <div className="col-md-4 col-sm-12"> <h4>Marriage</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p></div> 
            </div>
        </section>
    );
}
 
export default HomePage;