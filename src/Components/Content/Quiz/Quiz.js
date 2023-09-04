import './Quiz.css';

const Quiz = () => {

  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      <h3 className="text-white text-end px-3">Result: pass / fail</h3>
      
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
          {/* ---We'll show type of icon depending of quiz result */}
          <i className="bi bi-exclamation-circle me-2 exclamation_circle_ico" />
          <i className="bi bi-check-circle me-2 check_circle_ico" />
            Question #1
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
          <div className="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
          {/* ---We'll show type of icon depending of quiz result */}
          <i className="bi bi-exclamation-circle me-2 exclamation_circle_ico" />
          <i className="bi bi-check-circle me-2 check_circle_ico" />
          Question #2
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
          <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
          {/* ---We'll show type of icon depending of quiz result */}
          <i className="bi bi-exclamation-circle me-2 exclamation_circle_ico" />
          <i className="bi bi-check-circle me-2 check_circle_ico" />
          Question #3
          </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
          <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
          {/* ---We'll show type of icon depending of quiz result */}
          <i className="bi bi-exclamation-circle me-2 exclamation_circle_ico" />
          <i className="bi bi-check-circle me-2 check_circle_ico" />
          Question #4
          </button>
        </h2>
        <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
          <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
          {/* ---We'll show type of icon depending of quiz result */}
          <i className="bi bi-exclamation-circle me-2 exclamation_circle_ico" />
          <i className="bi bi-check-circle me-2 check_circle_ico" />
          Question #5
          </button>
        </h2>
        <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
          <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>



      <div className="w-100 d-flex justify-content-end mt-3">
        <button type="button" className="btn btn-outline-secondary btn-lg px-4 mx-2">Reset</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4 mx-2">Submit answers</button>
      </div>
    </div>
  )
}

export default Quiz;