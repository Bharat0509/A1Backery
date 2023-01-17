import './products.scss'
import { cakes } from './productDetail'
import { Rating } from 'react-simple-star-rating'
const Products = () => {
    return (<>
        <div className="heading">Our Cakes</div>
        <div className="container">
            <div className="filter">
                <div className='filter-heading'>Filter</div>
                <div className="search">
                    <input type="text" name="search" id="" placeholder='Search here...' />
                </div>
                <div className="categories">
                    <div className="heading">Categories</div>
                    <div>Cakes</div>
                    <div>Pestries</div>
                </div>
                <div className="price-filter"></div>
                <div className="rating-filter"></div>
            </div>
            <div className="procuct-container">

                {cakes.map(
                    (product) =>

                        < div className="card" >
                            <div className="card-img"><img src={product.image} alt="" /></div>
                            <div className="card-name">{product.name}</div>
                            <div className="card-middle">
                                <div className="card-price">{product.price} &#8377;</div>
                                <div className="card-rating"><Rating/>{product.rating}</div>
                            </div>
                            <div className="card-desc">{product.desc}</div>
                            <div className="card-btn">Order Now</div>
                        </div>

                )
                }
            </div >
        </div>
    </>

    )
}

export default Products