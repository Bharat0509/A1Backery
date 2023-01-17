import './card.scss'


const Card = ({Icon,Title,Desc}) => {
  return (
    <div className="card-container">
      
        <h3>
          {/* Hygenic Cakes */}
          {Icon}
          {Title}
        </h3>
        <p>
          {Desc}
        </p>
      
      {/* <div>
        Made-TO-Order Pestries

      </div>
      <div>
        Custom Cakes

      </div>
      <div>
        Happy Customers
      </div> */}

    </div>
  )
}

export default Card