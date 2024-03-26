import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistryModal from "../../../Modals/RegistryModal";
import Modal from "../../../Modals/Modal";
import TableComponent from "../../../TableComponent";

const Registry = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState([{
    status:'Active',
    repository_name:'Python3.predict.py',
    tag:'Sucess',
    regisiry_name:'Test123',
    created_by:'2024-12-14, 5:21:55 pm'
  }]);

  const columns = [
    { Header: 'Status', accessor: 'status' },
    { Header: 'Repository Name', accessor: 'repository_name' },
    { Header: 'Tag', accessor: 'tag' },
    { Header: 'Regisiry Name', accessor: 'regisiry_name' },
    { Header: 'Created By', accessor: 'created_by' },
  ];
  const data = tableData.map((row, index) => ({
    ...row,
  }));
  const navigate = useNavigate();

  const handleBuildImg = () => {
    console.log("handle called");
    navigate("/container/build-img");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <RegistryModal onClose={closeModal} />
        </Modal>
      )}
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
                onClick={() => setIsModalOpen(true)}
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
            <TableComponent
             columns={columns}
             data={data}
            />
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
