import './Header.css';

import image from './images/CSSlogosmall.jpg';
import image2 from './images/flag.png';
import image3 from './images/facebook.png';
import image4 from './images/insta.png';
import image5 from './images/linkedIN.png';
// import image5 from './images/linkedIn.png';
function Header() {
    return(
        <div>
            <div class="Header">
                <img class="csslogo" src={image} alt="CSSLogo"/>
                <img class="flag" src={image2} alt="flag.png"/>
            </div>
                {/* <div className='social_icons'>
                    <img class="facebook"  src={image3} alt="facebook.png"/>
                    <img class="instagram" src={image4} alt="insta.png"/>
                    <img class="linkedIn" src={image5} alt="linkedIn.png"/>
                </div> */}
        </div>
    )
}
export default Header;