// import  from '../../../public/dist/img/project-icon.png' ;

import { useState } from "react";
import StartProjectModal from "../../Modals/StartProjectModal";
import Modal from "../../Modals/Modal";
import { useNavigate } from "react-router-dom";
// import { Modal } from "bootstrap";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const redirectToNewProject = (event) => {
    setIsModalOpen(false);
    console.log(event)
    navigate(`/project/${event}`)
  }

  return (
    <div className="content-wrapper">
         {isModalOpen && (
                      <Modal isOpen={isModalOpen}
                             onClose={closeModal}>
                        <StartProjectModal onClose={closeModal} onContinue={redirectToNewProject}/>
                      </Modal>
                    )}
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 font-weight-bold clr-w pb10">Dashboard</h1>
              <h5 className="clr-w min200">Welcome back to the Dashboard.</h5>
              {/*<p class="clr-g">Scroll down to see quick links and overviews of your Server, To do list
Order status or get some Help using Nifty.</p>*/}
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              {/*<ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a >Dashboard</a></li>
        <li class="breadcrumb-item active">Project</li>
      </ol>*/}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {/* Main content */}
      <div className="content">
        <div className="container-fluid topoffset">
          <div className="row">
            <div className="col-lg-7">
              <div className="card br10">
                <div className="card-body">
                  <h4 className="text-center">Start New Project</h4>
                  <p className="card-text text-center">
                    Kick off a new project, add collaborators and more
                  </p>
                  <figure className="img-figure">
                    <img
                      //   src="../../../public/dist/img/project-icon.png"
                      src={process.env.PUBLIC_URL + "dist/img/project-icon.png"}
                      className="img-responsive"
                      alt=""
                    />
                  </figure>
                  <div className="text-center">
                    <a className="card-link btn-primary btn">Example Project</a>
                    <a
                      className="card-link btn-success btn"
                      onClick={openModal}
                    >
                      Start Project
                    </a>
                 
                    {/* {isModalOpen &&
                      createPortal(
                        <StartProjectModal
                          showModal={isModalOpen}
                          closeModal={closeModal}
                        />,
                        document.getElementById("modal-root")
                      )} */}
                  </div>
                </div>
              </div>
            </div>
            {/* /.col-md-6 */}
            <div className="col-lg-5">
              <div className="row">
                <div className="col-6">
                  <div className="card bg-success rollout br10">
                    <h6 className="icon-style">
                      <i className="nav-icon fas fa-database" />{" "}
                      <span className="font-weight-bold">
                        ML pipeline
                        <br /> <small>with canry rollout</small>
                      </span>
                    </h6>
                    <p>
                      ML pipeline for predicting housing price in boston, with
                      model training and canary rollout for serving.
                    </p>
                    <a className="btn btn-success">Example Project</a>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card bg-info rollout br10">
                    <h6 className="icon-style">
                      <i className="nav-icon fas fa-database" />{" "}
                      <span className="font-weight-bold">
                        Visualize your data <br />{" "}
                        <small>using facets and Dash</small>
                      </span>
                    </h6>
                    <p>
                      ML pipeline for predicting housing price in boston, with
                      model training and canary rollout for serving.
                    </p>
                    <a className="btn btn-info">Example Project</a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="card bg-purple rollout br10">
                    <h6 className="icon-style">
                      <i className="nav-icon fas fa-database" />{" "}
                      <span className="font-weight-bold">
                        ML pipeline
                        <br /> <small>the lendingClub dataset</small>
                      </span>
                    </h6>
                    <p>
                      ML pipeline for predicting housing price in boston, with
                      model training and canary rollout for serving.
                    </p>
                    <a className="btn btn-purple">Example Project</a>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card bg-warning rollout br10">
                    <h6 className="icon-style">
                      <i className="nav-icon fas fa-database" />{" "}
                      <span className="font-weight-bold">
                        Import
                        <br /> <small>Your own Project</small>
                      </span>
                    </h6>
                    <p>
                      ML pipeline for predicting housing price in boston, with
                      model training and canary rollout for serving.
                    </p>
                    <a className="btn btn-warning">
                      <i className="fas fa-plus-circle" /> Import
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* /.col-md-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content */}
    </div>
  );
};

export default Dashboard;
