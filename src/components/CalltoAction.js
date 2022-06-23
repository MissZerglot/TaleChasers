import {Button} from './Button';
import '../App.css';
import './CalltoAction.css';
import {Link} from 'react-router-dom';
import videos from '../videos/talechasershome.mp4';
import Shop from './pages/Shop'; 

function CalltoActionSection() {
    return (
        <div className='action-container'>
            <video src={videos}
                autoPlay
                loop
                muted/>
            <h1>
                Legends of the Talechasers Await</h1>
            <p>What in the Multiverse are 
                <strong>
                 you  
                </strong>
                waiting for?</p>
            <div className="action-btns">
                <a href='/shop'> 
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Shop Now 
                </Button>
                </a> 
                <a href="https://www.youtube.com/channel/UCh1XntLdmrLFc_jOJ4eCpHQ" target="_blank"> 
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Watch Us
                    <i className='far fa-play-circle'/>
                </Button>
                </a>
            </div>
        </div>
    )
}

export default CalltoActionSection;
