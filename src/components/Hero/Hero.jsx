import './hero.scss'
import HeroBg from '../../images/cake.webp'
const Hero = () => {
    return (

        <div className="hero-container">
            <div className="hero-container-details">
                {/* <h3>Cakes Made With Love</h3> */}
                <h5>Welcome to <span><i>A-One Backery</i></span> </h5>
                <h3>Because not every day is sweet enough.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                    repellat laboriosam fugit aspernatur quod iste placeat consequatur
                    officiis, autem dolore!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt harum sit!
                </p>
                <button>Explore Menu</button>

            </div>
            <div className="hero-container-image">
                <img src={HeroBg} alt="" />
            </div>
        </div>
    )
}

export default Hero