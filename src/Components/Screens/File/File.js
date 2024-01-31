import FileUploader from "../../FileUploader/FileUploader";

const File = () => {
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
                Add your files to your project.
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
            <div className="text-center mb-4 col-xl-3">
              <div className="minh445">
                <a href="javascript:void(0)" className="btn btn-danger">
                  New Directory
                </a>
                <a href="javascript:void(0)" className="btn btn-success">
                  New File
                </a>
              </div>
            </div>
            <div className="text-center mb-4 col-xl-4">
              <div className="card minh445">
                {/* <h4>Upload file</h4> */}
                <div className="drag-drop">
                  {/* <i className="fas fa-upload" /> */}
                  {/* <p>Drag &amp; Drop</p> */}
                  <FileUploader/>
                </div>
              </div>
            </div>
            <div className="text-center mb-4 col-xl-5">
              <div className="card minh445">
                <h4>Get Started with cnvrg CL1</h4>
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

export default File;
