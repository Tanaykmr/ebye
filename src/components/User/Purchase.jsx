import Navbar from '../Navbar';
import Product from './Product';
import photo1 from "../../assets/purchase-imageone.png"
import photo2 from "../../assets/purchase-imagetwo.png"
import photo3 from "../../assets/purchase-imagethree.png"
import photo4 from "../../assets/purchase-imagefour.png"
import photo5 from "../../assets/purchase-imagefive.png"
import photo6 from "../../assets/purchase-imagesix.png"
import photo7 from "../../assets/purchase-imageseven.png"\
import photo8 from "../../assets/purchase-imageeight.png"


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
            name="Poco m3"
            year="2021"
            price="₹10000"
          />
          <Product
            image={photo3}
            name="Asus vivobook"
            year="2022"
            price="₹16000"
          />
          <Product
            image= {photo4}
            name="iPhone 13"
            year="2021"
            price="₹30000"
          />
          <Product
            image={photo5}
            name="Redmi Note 13 pro"
            year="2022"
            price="₹9999"
          />
          <Product
            image={photo6}
            name="Mac M1"
            year="2023"
            price="₹39999"
          />
          <Product
            image={photo7}
            name="Samsung S23"
            year="2022"
            price="₹29999"
          />
          <Product
            image={photo8}
            name="Vivo V29"
            year="2021"
            price="7999"
          />
          
          {/* Add more Product components as needed */}
        </div>
      </div>
    </div>
  );
};

export default Purchase;
