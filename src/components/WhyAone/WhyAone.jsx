import Card from '../Card/Card'
import './whyAone.scss'
import { MdLocalHospital } from 'react-icons/md'
import { GiCakeSlice,GiStairsCake } from 'react-icons/gi'
import {HiEmojiHappy} from 'react-icons/hi'
const WhyAone = () => {
    return (

        <div className="whyAone-container">
            <div className='whyAone-container-heading'>
                Why <span>Choose</span> A-One Backery
            </div>
            <div className="whyAone-container-firstRow">
                <div className="left">
                    <Card
                        Icon={<MdLocalHospital />}
                        Title="Hygenic Cakes"
                        Desc="loremad dagadf  a iado  af aoidj a d"
                    />
                    <Card
                        Icon={<GiCakeSlice/>}
                        Title=" Made-TO-Order Pestries"
                        Desc="loremad fafddf a iado  af aoidj a d"
                    />
                </div>
                <div className="right"></div>
            </div>
            <div className="whyAone-container-secondRow">
                <div className="left"></div>
                <div className="right">
                    <Card
                        Icon={<GiStairsCake/>}
                        Title="Custom Cakes"
                        Desc="loremad  fadfd aa iado  af aoidj a d"
                    />
                    <Card
                        Icon={<HiEmojiHappy/>}
                        Title="Happy Customers"
                        Desc="loremad  adfa adfd iado  af aoidj a d"
                    /></div>
            </div>

        </div>
    )
}

export default WhyAone