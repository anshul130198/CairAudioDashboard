import { useNavigate } from "react-router-dom";

const Registry = () => {
  const navigate = useNavigate();

  const handleBuildImg = () => {
    console.log("handle called");
    navigate("/container/build-img");
  };

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Containers</a>
                </li>
              </ol>
              <h1 className="m-0 font-weight-bold clr-w pb10">Registries</h1>
              <h5 className="clr-w min50">&nbsp;</h5>
              {/*<p class="clr-g">Scroll down to see quick links and overviews of your Server, To do list
Order status or get some Help using Nifty.</p>*/}
            </div>
            {/* /.col */}
            <div className="col-sm-3 offset-xl-3 padt20">
              <button
                type="button"
                className="btn btn-block btn-success col-sm-8"
                data-toggle="modal"
                data-target="#registries"
              >
                Add Registry
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
            <div className="col-3">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control form-control-border border-width-2"
                />
              </div>
            </div>
            <div className="col-5 offset-4">
              <ul className="filter-tab">
                <li>Created At</li>
                <li>|</li>
                <li>Registry</li>
                <li>|</li>
                <li>Repostory</li>
                <li>|</li>
                <li>Created By</li>
              </ul>
            </div>
          </div>
          <div className="form-group text-right">
            <button className="btn btn-primary" onClick={handleBuildImg}>
              Build Image
            </button>
            <button className="btn btn-success">Pull Image</button>
          </div>
          <div className="row">
            <table className="table">
              <tbody>
                <tr>
                  <td>Status</td>
                  <td>Repository Name</td>
                  <td>Tag</td>
                  <td>Regisiry Name</td>
                  <td>Created By</td>
                </tr>
                <tr>
                  <td>Active</td>
                  <td>Python3.predict.py</td>
                  <td>Sucess</td>
                  <td>Test123</td>
                  <td>2024-12-14, 5:21:55 pm</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content */}
    </div>
  );
};

export default Registry;
