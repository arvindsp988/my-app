import './Footer.css';
import image from './images/CSSlogosmall.jpg';
function footer() {

    return(
        <div class="footer1">
            <p>Footer</p>
            <img class="csslogo" src={image} alt="CSSLogo"/>
        </div>
    )
}

export default footer;