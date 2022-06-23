import {Button} from './Button';
import '../App.css';
import './CalltoAction.css';
import videos from '../videos/talechasershome.mp4';

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
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Shop Now
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Watch Us
                    <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default CalltoActionSection;
