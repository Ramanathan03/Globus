const Head_slider = ()=>(
	<div className="row "  >
	<div id="carouselExampleControls" className="carousel slide col-md-12" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/eco.jpg" className="d-block w-100 slider-img" alt="..."/>
      <div className="subtitle">
      <h4 className="head-slider-h4">Eco-Friendly <br/> Cleaning Service</h4>
      <button className="btn button">Want to Know more?</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/slide-2.jpg" className="d-block w-100 slider-img" alt="..."/>
      <div className="subtitle">
      <h4 className="head-slider-h4">A Caring <br/> Cleaning Team</h4>
      <button className="btn button">Want to Know more?</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/slide-3.jpg" className="d-block w-100 slider-img" alt="..."/>
      <div className="subtitle">
      <h4 className="head-slider-h4">Giving You <br/>More Time to Spend on <br/> What Really Matter</h4>
      <button className="btn button">Want to Know more?</button>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
)

export default Head_slider