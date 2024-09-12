import './About.css'
import image1 from "../../assets/self2.jpg"
function About() {
    return(
        <div className='about-sec'>
            <div className='about-head'><h1 className='About'>About Me</h1></div>
            <div className="img-cont">
                <div className="img-sec">
                    <img src={image1} alt='img' className='image'/>
                </div>
                <div className="cont">
                    <p className='para'>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p><br/>
                    <p className='para'>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                    <div className="lang">
                        <div className="html"><p className='html-para'>HTML</p></div>
                        <div className="line1"></div>
                        
                        <div className="css"><p className='css-para'>CSS</p></div>
                        <div className="line2"></div>

                        <div className="bootstrap"><p className='bootstrap-para'>BOOTSTRAP</p></div>
                        <div className="line3"></div>

                        <div className="javascript"><p className='javascript-para'>JAVASCRIPT</p></div>
                        <div className="line4"></div>

                        <div className="react"><p className='react-para'>REACT JS</p></div>
                        <div className="line5"></div>
                    </div>   
                </div>
            </div>
            <div className="about-exp">
                <div className='exp1'><p className='ex-para1'><span className='ex-span1'>1+</span> <br/> Years Experience</p><hr className='linee'/></div>
                <div className='exp2'><p className='ex-para1'><span className='ex-span1'>10+</span> <br/> Project Completed</p><hr className='linee'/></div>
                <div className='exp3'><p className='ex-para1'><span className='ex-span1'>5+</span> <br/>Happy Client</p></div>
            </div>
        </div>
    )
}
export default About