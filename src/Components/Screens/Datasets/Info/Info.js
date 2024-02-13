const Info = () => {
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
                <li className="breadcrumb-item active">Info</li>
              </ol>
              <h1 className="m-0 font-weight-bold clr-w pb10">Info</h1>
              <h5 className="clr-w min50">&nbsp;</h5>
              {/*<p class="clr-g">Scroll down to see quick links and overviews of your Server, To do list
    Order status or get some Help using Nifty.</p>*/}
            </div>
            {/* /.col */}
            <div className="col-sm-3 offset-xl-3 padt20">
              {/* <button type="button" class="btn btn-block btn-success col-sm-8">New Experiment</button>*/}
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
            <table className="table">
              <tbody>
                <tr>
                  <td>Title</td>
                  <td>Privacy</td>
                  <td>Collaborators</td>
                  <td>Last updated</td>
                  <td>Commits</td>
                  <td>Queries</td>
                </tr>
                <tr>
                  <td>Test</td>
                  <td>Private</td>
                  <td>T</td>
                  <td>2024-12-14, 5:21:55 pm</td>
                  <td>1</td>
                  <td>0</td>
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

export default Info;
