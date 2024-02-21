const General = () => {
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Dataset</a>
                </li>
                <li className="breadcrumb-item active">Create</li>
              </ol>
              <h5 className="m-0 font-weight-bold clr-w pb10">
                Create and upload any kind of dataset, images, audio, video,
                text or unbuild data
              </h5>
              <h5 className="clr-w min50">&nbsp;</h5>
            </div>
            {/* /.col */}
            <div className="col-sm-3 offset-xl-3 padt20">
              <button
                type="button"
                className="btn btn-block btn-success col-sm-8"
                data-target="#start-dataset"
                data-toggle="modal"
                data-dismiss="modal"
              >
                Create New
              </button>
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
            <div className="text-center mb-4 col-xl-5">
              <div className="minh445">
                <h3 className="text-left">Test</h3>
                <div className="input-group mb-3">
                  <select name id className="form-control">
                    <option value>Commit 1, test2311:4d134bo0</option>
                  </select>
                  <div className="input-group-prepend">
                    <button type="button" className="btn btn-info btn-flat">
                      Search
                    </button>
                  </div>
                </div>
                <div>
                  <a href="javascript:void(0)" className="btn btn-danger">
                    New Directory
                  </a>
                  <a href="javascript:void(0)" className="btn btn-success">
                    New File
                  </a>
                </div>
                <div className="commit-stip text-left">
                  <strong>test1231</strong>: commit 1 (less than a minute ago)
                </div>
                <div className="card">
                  <div className="drag-drop">
                    <i className="fas fa-upload" />
                    <p>Drag &amp; Drop</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mb-4 col-xl-7">
              <div className="card minh418">
                <div className="card-body">
                  <h4>Get Started with CLI</h4>
                  <p>
                    Add file to this section or simply run them with he cnrg
                    unitity
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
      </div>
      {/* /.content */}
    </div>
  );
};

export default General;
