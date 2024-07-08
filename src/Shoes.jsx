import amazon from './assets/amazon.png'
import flipkart from './assets/flipkart.jpg'
import shoes from './assets/shoes.png'

const Shoes = () => {
  return (
    <main className="shoes container">
        <div className="content">
            <h1>Your Feet deserve the best</h1>
            <p>Your Feet deserve the best.Your Feet deserve the best.Your Feet deserve the best.Your Feet deserve the best</p>
            <div className="button">
            <button>Shop Now</button>
            <button className="twobutton">Category</button>
        </div>
        <div className="shop">
            <p>Also available on</p>
            <div className="icons">
                <img src={amazon} alt="amazon-logo" />
                <img src={flipkart} alt="flipkart-logo" />
            </div>
        </div>
        </div>
        
        <div className="image">
            <img src={shoes} alt="shoes" />
        </div>
    </main>
  )
}

export default Shoes;