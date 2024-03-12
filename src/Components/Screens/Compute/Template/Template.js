import { useNavigate } from "react-router-dom";
import TableComponent from "../../../TableComponent";
import { useState } from "react";

const Template = () => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([
    { active: 'Active', size: 'Small', type: 'Default', configuration: '1 CPUs 2 GB', jobs: '0 Jobs' },
    { active: 'Active', size: 'Small', type: 'Default', configuration: '1 CPUs 2 GB', jobs: '0 Jobs' },
    { active: 'Active', size: 'Small', type: 'Default', configuration: '1 CPUs 2 GB', jobs: '0 Jobs' },
    { active: 'Active', size: 'Small', type: 'Default', configuration: '1 CPUs 2 GB', jobs: '0 Jobs' },
  ]);
  const redirectToNewTemplate = () => {
    navigate("/compute/add-new-template");
  };
  const handleDelete = (index) => {
    setTableData((prevData) => prevData.filter((_, i) => i !== index));
  };
  const columns = [
    { Header: 'Active', accessor: 'active' },
    { Header: 'Size', accessor: 'size' },
    { Header: 'Type', accessor: 'type' },
    { Header: 'Configuration', accessor: 'configuration' },
    { Header: 'Jobs', accessor: 'jobs' },
    { Header: 'Actions', accessor: 'actions' },
  ];
  const data = tableData.map((row, index) => ({
    ...row,
    actions: <i className="fas fa-trash" onClick={() => handleDelete(index)} />,
  }));

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
              <h1 className="m-0 font-weight-bold clr-w pb10">
                Compute Template
              </h1>
              <h5 className="clr-w min50">
                The available compute templates for workspace, experments and
                model end points.
              </h5>
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
            <div className="form-group text-right">
              <button
                className="btn btn-success"
                onClick={redirectToNewTemplate}
              >
                Add Compute Template
              </button>
            </div>
          </div>
          <div className="row">
            <TableComponent
             columns={columns}
             data={data}
            />
            {/* <table className="table">
              <tbody>
                <tr>
                  <td>Active</td>
                  <td>Small</td>
                  <td>Default</td>
                  <td>1 CPUs 2 GB</td>
                  <td>0 Jobs</td>
                  <td>
                    <i className="fas fa-trash" />
                  </td>
                </tr>
                <tr>
                  <td>Active</td>
                  <td>Small</td>
                  <td>Default</td>
                  <td>1 CPUs 2 GB</td>
                  <td>0 Jobs</td>
                  <td>
                    <i className="fas fa-trash" />
                  </td>
                </tr>
                <tr>
                  <td>Active</td>
                  <td>Small</td>
                  <td>Default</td>
                  <td>1 CPUs 2 GB</td>
                  <td>0 Jobs</td>
                  <td>
                    <i className="fas fa-trash" />
                  </td>
                </tr>
                <tr>
                  <td>Active</td>
                  <td>Small</td>
                  <td>Default</td>
                  <td>1 CPUs 2 GB</td>
                  <td>0 Jobs</td>
                  <td>
                    <i className="fas fa-trash" />
                  </td>
                </tr>
                <tr>
                  <td>Active</td>
                  <td>Small</td>
                  <td>Default</td>
                  <td>1 CPUs 2 GB</td>
                  <td>0 Jobs</td>
                  <td>
                    <i className="fas fa-trash" />
                  </td>
                </tr>
              </tbody>
            </table> */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content */}
    </div>
  );
};

export default Template;
