import './Home.css'
import selfimage from '../../assets/self1.png'
import {Button1,Button2} from '../button/Button'
function Home() {
    return(
        <>
        <div className='home-sec'>
            <div className="img-sec"></div>
            <div className='img-part'> <img src={selfimage} alt='sel-image' className='selfimage'/></div>
            <div className="img-sec1"></div>
            <div className="head-sec">
            <h1 className='head'><span className='head1'><br/>I'm Hafiz Muhammad Artaza, </span> Full stack developer based in Pakistan.</h1><br/>
            <p className='para1'>I am a full stack developer from Faisalabad, Pakistan with 1 years of experience in SMIT. My dream is to work in Google and Microsoft.</p>
           
            </div>
            <div className='btn-sec'>
            <Button1 label="Contact With Me"/>
            <Button2 label1="My Resume"/>
            </div>
        </div>
        </>
    )
}
export default Home