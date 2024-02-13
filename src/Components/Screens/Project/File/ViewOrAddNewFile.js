const ViewOrAddNewFile = () => {
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
                <li className="breadcrumb-item active">File</li>
              </ol>
              <h1 className="m-0 font-weight-bold clr-w pb10">
                test-proj{" "}
                <a href="javascript:void(0)" className="fas fa-pencil-alt" />
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
                Connect Git
              </button>
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
            <div className="text-center mb-4 col-xl-5">
              <div className="minh445">
                <div className="input-group mb-3">
                  <select name id className="form-control">
                    <option value>Commit 1, test2311:4d134bo0</option>
                  </select>
                  <div className="input-group-prepend">
                    <button type="button" className="btn btn-info btn-flat">
                      View Commit
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
                <div className="card-body table-responsive p-0">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>File Name</th>
                        <th>Size</th>
                        <th>Last Updated</th>
                        <th />
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Predicty.py</td>
                        <td>31 Bytes</td>
                        <td>Less than a minute ago</td>
                        <td>
                          <a
                            href="javascript:void(0)"
                            className="fas fa-download"
                          />
                        </td>
                        <td>
                          <a
                            href="javascript:void(0)"
                            className="fas fa-trash"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
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

export default ViewOrAddNewFile;
