

const SidebarTopic = ({ title, category }) => {

  return (
    <>
      <li>
        <a href="#abc" className=" d-inline-flex text-decoration-none rounded title_3">
          <i className="bi bi-circle me-2" />
          <i className="bi bi-check-circle me-2" />
          { title }
        </a>
      </li>
    </>
  )
}

export default SidebarTopic;