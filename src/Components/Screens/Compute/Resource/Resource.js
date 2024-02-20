const Resource = () => {
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Compute</a>
                </li>
              </ol>
              <h1 className="m-0 font-weight-bold clr-w pb10">Resource</h1>
              <h5 className="clr-w min50">&nbsp;</h5>
              {/*<p class="clr-g">Scroll down to see quick links and overviews of your Server, To do list
Order status or get some Help using Nifty.</p>*/}
            </div>
            {/* /.col */}
            <div className="col-sm-3 offset-xl-3 padt20">
              {/*              <button type="button" class="btn btn-block btn-success col-sm-8" data-toggle="modal" data-target="#registries">New Resources</button>*/}
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
            <div className="mb-4 offset-xl-3 col-xl-5">
              <div className="card minh445">
                <div className="card-body">
                  <h4 className="text-center">Create New Resource</h4>
                  <form action>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Resource Name</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter title"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Domain</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter title"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Domain</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter title"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Kube Config</label>
                      <textarea
                        name
                        className="form-control"
                        id
                        cols={30}
                        rows={10}
                        defaultValue={""}
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
                      <div className="row">
                        <div className="col-6">
                          <button
                            type="button"
                            className="btn btn-block btn-default"
                          >
                            Cancel
                          </button>
                        </div>
                        <div className="col-6">
                          <button
                            type="button"
                            className="btn btn-block btn-primary"
                          >
                            Add
                          </button>
                        </div>
                      </div>
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

export default Resource;
