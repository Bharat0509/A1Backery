import CTA from '../CTA/CTA'
import './nav.scss'

const Nav = () => {
  return (
    <div className="Nav-container">
      <div className='Nav-container-logo'>
        <span>A1 </span>Backery
      </div>
      <div className='Nav-container-items'>
        <div>Home</div>
        <div>Speciality</div>
        <div>Popular</div>
        <div>Review</div>
        <div>Contact Us</div>
        <button className='button'>Order Now</button>

      </div>
    </div>
  )
}

export default Nav