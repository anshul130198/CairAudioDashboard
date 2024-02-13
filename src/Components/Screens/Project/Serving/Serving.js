const Serving = () => {
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-12">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Project</a>
                </li>
                <li className="breadcrumb-item active">Serving</li>
              </ol>
              <h3 className="m-0 font-weight-bold clr-w pb10">
                Publish and share your model and algonrithms with one click
              </h3>
              <h5 className="clr-w min50">&nbsp;</h5>
              {/*<p class="clr-g">Scroll down to see quick links and overviews of your Server, To do list
    Order status or get some Help using Nifty.</p>*/}
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
            <div className="menu-center">
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-secondary">
                  <input
                    type="radio"
                    name="options"
                    id="option_a1"
                    autoComplete="off"
                    defaultChecked
                  />{" "}
                  Active
                </label>
                <label className="btn btn-secondary">
                  <input
                    type="radio"
                    name="options"
                    id="option_a2"
                    autoComplete="off"
                  />{" "}
                  Branch
                </label>
                <label className="btn btn-secondary">
                  <input
                    type="radio"
                    name="options"
                    id="option_a3"
                    autoComplete="off"
                  />{" "}
                  Web Services
                </label>
                <label className="btn btn-secondary">
                  <input
                    type="radio"
                    name="options"
                    id="option_a4"
                    autoComplete="off"
                  />{" "}
                  Stream
                </label>
                <label className="btn btn-secondary">
                  <input
                    type="radio"
                    name="options"
                    id="option_a5"
                    autoComplete="off"
                  />{" "}
                  Technical Flow
                </label>
                <label className="btn btn-secondary">
                  <input
                    type="radio"
                    name="options"
                    id="option_a6"
                    autoComplete="off"
                  />{" "}
                  Team
                </label>
                <label className="btn btn-secondary">
                  <input
                    type="radio"
                    name="options"
                    id="option_a7"
                    autoComplete="off"
                  />{" "}
                  Open MNO
                </label>
              </div>
            </div>
            <div className="mb-4 offset-xl-3 col-xl-5">
              <div className="card minh445">
                <div className="card-body">
                  <h4 className="text-center">New Endpoint</h4>
                  <form action>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Title</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter title"
                      />
                    </div>
                    <div className="form-group">
                      <label>Compute</label>
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
                      <label>Datasets</label>
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
                      <label>Images</label>
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

export default Serving;
