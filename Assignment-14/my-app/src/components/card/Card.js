import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import './Card.css';
function Card() {
    return(
        <div className='card-sec'>
           <div className="main-head"><h1 className='s-head'>My services</h1></div>

           <div className="card-box">
            <div className="card1">
                <div className="heading"><h2 className='h-style'>01.</h2></div>
                <div className="heading1"><h2 className='h-style1'>Web design</h2></div>
                <div className="paragraph"><p className='p-style'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis itaque .</p></div>
                <div className="read-more"><span className="h-style3">Read More</span><FontAwesomeIcon icon={faArrowRight} className='icon'/></div>
            </div>
            <div className="card1">
                <div className="heading"><h2 className='h-style'>02.</h2></div>
                <div className="heading1"><h2 className='h-style1'>Web Development</h2></div>
                <div className="paragraph"><p className='p-style'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis itaque .</p></div>
                <div className="read-more"><span className="h-style3">Read More</span><FontAwesomeIcon icon={faArrowRight} className='icon'/></div>
            </div>
            <div className="card1">
                <div className="heading"><h2 className='h-style'>03.</h2></div>
                <div className="heading1"><h2 className='h-style1'>App Designing</h2></div>
                <div className="paragraph"><p className='p-style'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis itaque .</p></div>
                <div className="read-more"><span className="h-style3">Read More</span><FontAwesomeIcon icon={faArrowRight} className='icon'/></div>
            </div>
            <div className="card1">
                <div className="heading"><h2 className='h-style'>04.</h2></div>
                <div className="heading1"><h2 className='h-style1'>Content Writing</h2></div>
                <div className="paragraph"><p className='p-style'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis itaque .</p></div>
                <div className="read-more"><span className="h-style3">Read More</span><FontAwesomeIcon icon={faArrowRight} className='icon'/></div>
            </div>
            <div className="card1">
                <div className="heading"><h2 className='h-style'>05.</h2></div>
                <div className="heading1"><h2 className='h-style1'>Digital Marketing</h2></div>
                <div className="paragraph"><p className='p-style'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis itaque .</p></div>
                <div className="read-more"><span className="h-style3">Read More</span><FontAwesomeIcon icon={faArrowRight} className='icon'/></div>
            </div>
            <div className="card1">
                <div className="heading"><h2 className='h-style'>06.</h2></div>
                <div className="heading1"><h2 className='h-style1'>Graphic Designing</h2></div>
                <div className="paragraph"><p className='p-style'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis itaque .</p></div>
                <div className="read-more"><span className="h-style3">Read More</span><FontAwesomeIcon icon={faArrowRight} className='icon'/></div>
            </div>

           </div>
        </div>
    )
}
export default Card