import React, { useState } from 'react'
import TableComponent from '../../../TableComponent';

const GetAllOrganizations = () => {
    const [tableData, setTableData] = useState([
        { status: 'Active', orgName: 'think future technologies',tag:"success", type: 'Default', Tag: '1 CPUs 2 GB', regisiryName: 'acv' ,CreatedBy:"a",},
        { status: 'Active', orgName: 'think future technologies',tag:"success" ,type: 'Default', Tag: '1 CPUs 2 GB', regisiryName: '0cc' ,CreatedBy:"b",},
        { status: 'Active', orgName: 'think future technologies', tag:"success",type: 'Default', Tag: '1 CPUs 2 GB', regisiryName: 'ccc' ,CreatedBy:"c",},
        { status: 'Active', orgName: 'think future technologies',tag:"success" ,type: 'Default', Tag: '1 CPUs 2 GB', regisiryName: 'ccc' ,CreatedBy:"d",},
      ]);
      const handleDelete = (index) => {
        setTableData((prevData) => prevData.filter((_, i) => i !== index));
      };
      const columns = [
        { Header: 'Status', accessor: 'status' },
        { Header: 'Organization Name', accessor: 'orgName' },
        { Header: 'Tag', accessor: 'tag' },
        { Header: 'Regisiry Name', accessor: 'regisiryName' },
        { Header: 'Created By', accessor: 'CreatedBy' },
        { Header: 'Actions', accessor: 'actions' },
      ];
      const data = tableData.map((row, index) => ({
        ...row,
        actions: <>
            <a href="javascript:void(0)" className="fa fa-pencil-alt" />
            <a href="javascript:void(0)" className="fa fa-trash" onClick={()=>handleDelete(index)}/>
        </>,
      }));
  return (
   <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Organization</a></li>
            <li className="breadcrumb-item active">Details</li>
          </ol>
          <h1 className="m-0 font-weight-bold clr-w pb10">Organization</h1>
          <h5 className="clr-w min50">&nbsp;</h5>
          {/*<p class="clr-g">Scroll down to see quick links and overviews of your Server, To do list
Order status or get some Help using Nifty.</p>*/}
        </div>{/* /.col */}
        <div className="col-sm-3 offset-xl-3 padt20">
          <button type="button" className="btn btn-block btn-success col-sm-8" data-toggle="modal" data-target="#registries">Create Team</button>
          {/*<p>Connect your git repository and work seamlessly with it.</p>*/}
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <div className="content">
    <div className="container-fluid">
      <div className="row">
      <TableComponent
             columns={columns}
             data={data}
            />
        {/* <table className="table">
          <tbody><tr>
              <td>Status</td>
              <td>Organization Name</td>
              <td>Tag</td>
              <td>Regisiry Name</td>
              <td>Created By</td>
              <td>Created By</td>
            </tr>
            <tr>
              <td>Active</td>
              <td>Python3.predict.py</td>
              <td>Sucess</td>
              <td>Test123</td>
              <td>2024-12-14, 5:21:55 pm</td>
              <td>
                <ul className="none">
                  <li><a href="javascript:void(0)" className="fa fa-pencil-alt" /></li>
                  <li><a href="javascript:void(0)" className="fa fa-trash" /></li>
                </ul></td>
            </tr>
          </tbody></table> */}
      </div>
      {/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content */}
</div>

  )
}

export default GetAllOrganizations