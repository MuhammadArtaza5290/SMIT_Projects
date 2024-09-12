import "./Work.css"
import pic1 from '../../assets/p2.png'
import pic2 from '../../assets/p3.png'
import pic3 from '../../assets/p4.png'
import pic4 from '../../assets/p5.png'
import pic5 from '../../assets/p1.png'
import pic6 from '../../assets/p6.png'
import {Button2} from '../button/Button'
function Work() {
    return(
        <div className="work-sec">
            <div className="work-head">
                <h1 className="work-h">My Project</h1>
            </div>
            <div className="work-boox">
            <img src={pic1} alt='sel-image' className='w-pic1'/>
            <img src={pic2} alt='sel-image' className='w-pic1'/>
            <img src={pic3} alt='sel-image' className='w-pic1'/>
            <img src={pic4} alt='sel-image' className='w-pic1'/>
            <img src={pic5} alt='sel-image' className='w-pic1'/>
            <img src={pic6} alt='sel-image' className='w-pic1'/>

            </div>
            <div className="bbtn"><Button2 label1='See more' /></div>
            
        </div>
    )
}
export default Work