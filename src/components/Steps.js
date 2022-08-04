const Steps = () => {
  return (
    <div className="steps-container d-flex">
      <div className="step-container d-flex flex-column">
        <img src="./img/i-suitcase.svg" />
        <span className="step-info">pack</span>
      </div>
      <div className="step-arrow">
        <img src="./img/i-arrow-right.svg" />
      </div>
      <div className="step-container d-flex flex-column">
        <img src="./img/i-rocket-diagonal.svg" />
        <span className="step-info">fly</span>
      </div>
      <div className="step-arrow">
        <img src="./img/i-arrow-right.svg" />
      </div>
      <div className="step-container d-flex flex-column">
        <img src="./img/i-leaves.svg" />
        <span className="step-info">live</span>
      </div>{" "}
      <div className="step-arrow">
        <img src="./img/i-arrow-right.svg" />
      </div>
      <div className="final-step-container d-flex flex-column">
        <span>ENJOY</span>
        <span>A NEW WORLD!</span>
      </div>
    </div>
  );
};

export default Steps;
