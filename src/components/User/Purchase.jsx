import Navbar from '../Navbar';
import Product from './Product';
import photo1 from "../../assets/purchase-imageone.png"
import photo2 from "../../assets/purchase-imagetwo.png"
import photo3 from "../../assets/purchase-imagethree.png"


const Purchase = () => {
  return (
    <div>
   
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <Product
            image= {photo1}
            name="Dell Inspiron"
            year="2021"
            price="₹19999"
          />
          <Product
            image={photo2}
            name="Carbon Monitoring System 2"
            year="2022"
            price="$149.99"
          />
          <Product
            image={photo3}
            name="Carbon Monitoring System 1"
            year="2023"
            price="$99.99"
          />
          {/* Add more Product components as needed */}
        </div>
      </div>
    </div>
  );
};

export default Purchase;
