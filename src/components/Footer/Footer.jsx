import './footer.scss'
import { MdOutlineLocationOn, MdOutlineMailOutline } from 'react-icons/md'
import { BsTelephoneOutbound } from 'react-icons/bs'
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-s1">
        <span>A-One Backery</span>
        <p>
          Surat ,395007
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Soluta illo id asperiores. Culpa ex vel nihil nemo
          delectus voluptas itaque!</p>
      </div>
      <div className="footer-container-s2">
        <div className="heading">Quick Links</div>
        <div className="links">
          <ul>
            <li>Order Now</li>
            <li>Home</li>
            <li>Menu</li>
            <li>Reviews</li>
            <li>Contact Us</li>

          </ul>
        </div>
      </div>
      <div className="footer-container-s3">
        <div className="heading">Our Timing</div>
        <ul>
          <li>Monday: 9am to 6pm </li>
          <li>Tuesday: 9am to 6pm </li>
          <li>Wednesday: 9am to 6pm </li>
          <li>Thursday: 9am to 6pm </li>
          <li>Friday: 9am to 6pm </li>
          <li>Saturday: 9am to 6pm </li>
          <li>Sunday: 9am to 6pm </li>
        </ul>
      </div>
      <div className="footer-container-s4">
        <div className='heading'>Contact Us</div>
        <div className='location'><MdOutlineLocationOn /> A-ONE CAKE AND PASTRY
          Opp. PATEL PRAGATIWADI
          SURAT</div>
        <div className='call' ><BsTelephoneOutbound />   +91 7874332255</div>

        <div className='email'><MdOutlineMailOutline />Email@gmail.com</div>
        <div></div>
      </div>
    </div>
  )
}

export default Footer