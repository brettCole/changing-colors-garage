import React from 'react';

const TestimonialSection = () => {
  return (
    <div className="testimonials-2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              id="carouselExampleIndicators2"
              className="carousel slide"
            >
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators2" data-slide-to="0" className=""></li>
                <li data-target="#carouselExampleIndicators2" data-slide-to="1" className=""></li>
              </ol>
              <div 
                className="carousel-inner" 
                role="listbox"
              >
                <div class="carousel-item active justify-content-center"></div>
                  <div class="card card-testimonial card-plain">
                    <div class="card-avatar">
                      <a href="#pablo">
                        <img 
                          class="img img-raised rounded" 
                          src="assets/img/james.jpg"
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <h5 className="card-description">
                        Let's keep testing this out and see what happens
                      </h5>
                      <h3 className="card-title">
                        Isla Cole
                      </h3>
                      <div className="card-footer">
                        <h6 className="category text-primary">
                          Up and Comer
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item active justify-content-center"></div>
                  <div class="card card-testimonial card-plain">
                    <div class="card-avatar">
                      <a href="#pablo">
                        <img 
                          class="img img-raised rounded" 
                          src="assets/img/james.jpg"
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <h5 className="card-description">
                        This is the next one that should rotate in.
                      </h5>
                      <h3 className="card-title">
                        Rachel Cole
                      </h3>
                      <div className="card-footer">
                        <h6 className="category text-primary">
                          Very Supportive Great photographer
                        </h6>
                      </div>
                    </div>
                  </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button"data-slide="prev">
                <i className="now-ui-icons arrows-1_minimal-left" />
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                <i className="now-ui-icons arrows-1_minimal-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection;