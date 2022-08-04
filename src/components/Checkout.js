import Slider from "./Slider";
import Steps from "./Steps";
import ProductDescription from "./ProductDescription";

const Checkout = () => {
  return (
    <div className="checkout-container col-8">
      <Slider></Slider>
      <Steps></Steps>
      <ProductDescription></ProductDescription>
    </div>
  );
};

export default Checkout;
