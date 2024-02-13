const DatasetSetting = () => {
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
                <li className="breadcrumb-item active">Settings</li>
              </ol>
              <h5 className="clr-w min50">&nbsp;</h5>
              {/*<p class="clr-g">Scroll down to see quick links and overviews of your Server, To do list
    Order status or get some Help using Nifty.</p>*/}
            </div>
            {/* /.col */}
            <div className="col-sm-3 offset-xl-3 padt20">
              {/*<p>Connect your git repository and work seamlessly with it.</p>*/}
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
            <div className="text-center mb-4 col-xl-12">
              <div className="row">
                <div className="col-5 col-sm-3">
                  <div
                    className="nav flex-column nav-tabs h-100"
                    id="vert-tabs-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      className="nav-link active"
                      id="vert-tabs-home-tab"
                      data-toggle="pill"
                      href="#vert-tabs-home"
                      role="tab"
                      aria-controls="vert-tabs-home"
                      aria-selected="true"
                    >
                      Options
                    </a>
                    <a
                      className="nav-link"
                      id="vert-tabs-profile-tab"
                      data-toggle="pill"
                      href="#vert-tabs-profile"
                      role="tab"
                      aria-controls="vert-tabs-profile"
                      aria-selected="false"
                    >
                      Collaborators
                    </a>
                  </div>
                </div>
                <div className="col-7 col-sm-9">
                  <div className="tab-content" id="vert-tabs-tabContent">
                    <div
                      className="tab-pane text-left fade show active"
                      id="vert-tabs-home"
                      role="tabpanel"
                      aria-labelledby="vert-tabs-home-tab"
                    >
                      <h4>Settings</h4>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <select name id className="form-control">
                          <option value />
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Description</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter title"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Privacy</label>
                        <select name id className="form-control">
                          <option value />
                        </select>
                      </div>
                      <div className="form-group">
                        <button className="btn-danger">Delete Project</button>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="vert-tabs-profile"
                      role="tabpanel"
                      aria-labelledby="vert-tabs-profile-tab"
                    >
                      <h4>Collaborators</h4>
                      Mauris tincidunt mi at erat gravida, eget tristique urna
                      bibendum. Mauris pharetra purus ut ligula tempor, et
                      vulputate metus facilisis. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Vestibulum ante ipsum primis
                      in faucibus orci luctus et ultrices posuere cubilia Curae;
                      Maecenas sollicitudin, nisi a luctus interdum, nisl ligula
                      placerat mi, quis posuere purus ligula eu lectus. Donec
                      nunc tellus, elementum sit amet ultricies at, posuere nec
                      nunc. Nunc euismod pellentesque diam.
                    </div>
                  </div>
                  <div className="row">
                    <button className="btn btn-primary">Save</button>
                  </div>
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

export default DatasetSetting;
