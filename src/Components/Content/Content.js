import Quiz from "./Quiz/Quiz";


const Content = () => {

  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="lesson_block">
          <h3 className="display-5 fw-bold text-white lh-1 mb-3">
            Name of lesson
          </h3>
          <div className="video_wrapper">
            {/* ----Video-goes-here---- */}
            <h3 className="text-white">
              Video goes here...
            </h3>
            {/* ----------------------- */}
          </div>
          <h3 className="fw-bold text-white lh-1 my-3">Quiz</h3>
          <Quiz />
        </div>
      </div>
    </div>
  )
}

export default Content;