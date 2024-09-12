import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Contact.css'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { Button1 } from '../button/Button'
function Contact() {
    return(
        <>
        <div className="main-contact">
            <div className="contact-head"><h1>Get in touch</h1></div>
            <div className="contentt-box">
            <div className="box1">
                <div className='boxx-head'>
                    <h1 contHeading>Let's talk</h1>
                </div>
                <div className='boxx-para'><p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p></div>
                <div className='boxx-mail'><p className='fonttPara'><span><FontAwesomeIcon icon={faMailBulk} className='fontt'/></span> hafizartaza@gmail.com</p></div>
                <div className='boxx-phone'><p className='fonttPara'><span><FontAwesomeIcon icon={faPhone} className='fontt'/></span> +772-825-524</p></div>
                <div className='boxx-location'><p className='fonttPara'><span><FontAwesomeIcon icon={faLocation} className='fontt'/></span> Faisalabad</p></div>
            </div>
            <div className="box2">
                <label htmlFor="text" className='labell'>Your Name</label> <br/>
                <input type="text" id="text" required placeholder='Enter Your Name' className='inputt'/> <br/>
                <label htmlFor="text" className='labell'>Your Email</label> <br/>
                <input type="text" id="text" required placeholder='Enter Your Email' className='inputt1'/> <br/>
                <label htmlFor="text" className='labell'>Write your message here</label> <br/>
                <input type="text" id="text" required placeholder='Enter Your Message' className='inputt2'/> <br/>
                <Button1 label="Submit Now" className="Sbtn"/> 
            </div>
            </div>
        </div>
        </>
    )
}
export default Contact