const NewProject = () => {
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Project</a>
                </li>
                <li className="breadcrumb-item active">Project Details</li>
              </ol>
              <h1 className="m-0 font-weight-bold clr-w pb10">
                Test-Project-Name
              </h1>
              <h5 className="clr-w min50">&nbsp;</h5>
              {/*<p class="clr-g">Scroll down to see quick links and overviews of your Server, To do list
Order status or get some Help using Nifty.</p>*/}
            </div>
            {/* /.col */}
            <div className="col-sm-3 offset-xl-3 padt20">
              <button
                type="button"
                className="btn btn-block btn-success col-sm-8"
              >
                NEW WORKSPACE
              </button>
              <h5 className="clr-w ptb10">
                <i className="fas fa-cog" /> Default Project Setting
              </h5>
              <h6 className="clr-g">Compute - Medium</h6>
              <h6 className="clr-g">Image - cnmg.vg5.0</h6>
              <h6>
                <a className="clr-g">
                  <i className="fas fa-edit" /> Edit
                </a>
              </h6>
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
        <div className="container-fluid">
          <div className="row">
            <div className="text-center mb-4 col-xl-2">
              <div className="card">
                <ul className="details-list">
                  <li>
                    <span>0</span>
                    <small>Experiment</small>
                  </li>
                  <li>
                    <span>0</span>
                    <small>Endpoints</small>
                  </li>
                  <li>
                    <span>0</span>
                    <small>Work Space</small>
                  </li>
                  <li>
                    <span>0</span>
                    <small>Apps</small>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mb-4 col-xl-5">
              <div className="card minh445">
                <h4>Activity Feed</h4>
                <div className="main-content">
                  <p>Welcome to new project</p>
                </div>
              </div>
            </div>
            <div className="text-center mb-4 col-xl-5">
              <div className="card minh445">
                <h4>Running (0)</h4>
                <div className="main-content">
                  <p>Nothing is running now</p>
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content */}
    </div>
  );
};

export default NewProject;
