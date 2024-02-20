const AddNewTemplate = () => {
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-8">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Compute</a>
                </li>
                <li className="breadcrumb-item active">
                  <a href="#">Template</a>
                </li>
              </ol>
              <h1 className="m-0 font-weight-bold clr-w pb10">New Template</h1>
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
            <div className="mb-4 offset-xl-2 col-xl-8">
              <div className="card minh445">
                <div className="card-body">
                  <form action>
                    <div className="top-filter">
                      <ul>
                        <li className="btn btn-app">
                          <i className="fas fa-edit" />
                          Reguler
                        </li>
                        <li className="btn btn-app">
                          <i className="fas fa-address-book" />
                          Open MPi
                        </li>
                        <li className="btn btn-app">
                          <i className="fas fa-database" />
                          PyTorch Distrbuted
                        </li>
                        <li className="btn btn-app">
                          <i className="fas fa-space-shuttle" />
                          Spirk
                        </li>
                        <li className="btn btn-app">
                          <i className="fas fa-lightbulb" />
                          Ray
                        </li>
                        <li className="btn btn-app">
                          <i className="fas fa-code-branch" />
                          Modn
                        </li>
                      </ul>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Specifications</label>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-3">
                          <label htmlFor="exampleInputEmail1">CPU</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter title"
                          />
                        </div>
                        <div className="col-3">
                          <label htmlFor="exampleInputEmail1">Memory</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter title"
                          />
                        </div>
                        <div className="col-3">
                          <label htmlFor="exampleInputEmail1">GUP</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter title"
                          />
                        </div>
                        <div className="col-3">
                          <label htmlFor="exampleInputEmail1">
                            Shared Memory
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter title"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Specifications</label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Node Labels</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter title"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Node taints</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter title"
                      />
                    </div>
                    <div className="form-group">
                      <label>Queue</label>
                      <select
                        className="form-control select2"
                        style={{ width: "100%" }}
                      >
                        <option selected="selected">Alabama</option>
                        <option>Alaska</option>
                        <option>California</option>
                        <option>Delaware</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Washington</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Volume</label>
                      <select
                        className="form-control select2"
                        style={{ width: "100%" }}
                      >
                        <option selected="selected">Alabama</option>
                        <option>Alaska</option>
                        <option>California</option>
                        <option>Delaware</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Washington</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <button
                        type="button"
                        className="btn btn-block btn-success"
                      >
                        Start a Workspace
                      </button>
                    </div>
                  </form>
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

export default AddNewTemplate;
