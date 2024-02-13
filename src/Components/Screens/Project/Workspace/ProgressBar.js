const ProgressBar = () => {
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-12">
              <div className="progressbar">
                <ul>
                  <li>
                    <em className="fas fa-check-circle" />
                    <p>Connecting</p>
                  </li>
                  <li>
                    <em className="fas fa-check-circle" />
                    <p>Environment</p>
                  </li>
                  <li>
                    <em className="fas fa-check-circle" />
                    <p>Data &amp; Project</p>
                  </li>
                  <li>
                    <em className="fas fa-check-circle" />
                    <p>Configuration</p>
                  </li>
                  <li>
                    <em className="fas fa-check-circle" />
                    <p>Ready</p>
                  </li>
                </ul>
              </div>
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
            <div className="mb-4 col-xl-12">
              <table className="table">
                <tbody>
                  <tr>
                    <th>Time</th>
                    <th>Output</th>
                  </tr>
                  <tr>
                    <td>14-Dec-2023, 5:19:03 PM</td>
                    <td>Scheduling job to run on queue default</td>
                  </tr>
                  <tr>
                    <td>14-Dec-2023, 5:19:03 PM</td>
                    <td>Scheduling job to run on queue default</td>
                  </tr>
                </tbody>
              </table>
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

export default ProgressBar;
