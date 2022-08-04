const Slider = () => {
  return (
    <div className="products-slider-container">
      <div className="products-slider d-flex">
        <div className="product-image col-8">
          <div className="image-details-container d-flex flex-column">
            <h4 className="image-title">Enceladus</h4>
            <span className="image-details">The Saturn System</span>
            <span className="image-details">Distance: 9.5</span>
            <span className="image-details">AU Population: 3920</span>
          </div>
          <img src="./img/enceladus-slider.png" alt="Enceladus" />
        </div>
        <div className="product-information d-flex flex-column">
          <div className="product-description-container">
            <h3 className="product-heading">
              <strong>E</strong>nceladus
            </h3>
            <p className="product-description">
              is the sixth-largest moon of Saturn. It is about a tenth of
              Saturn's largest moon, Titan. <br />
              <br />
              Explore this amazing cosmic marvel in a safe and fast trip with
              our aerospace company.
            </p>
          </div>
          <div className="product-price d-flex align-items-center">
            <div className="price-container d-flex flex-column">
              <span className="price">999.990 €</span>
              <span className="price-information">one way ticket</span>
            </div>
            <button className="btn-success">Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
