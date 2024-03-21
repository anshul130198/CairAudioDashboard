import React, { useEffect, useState } from 'react'
import TableComponent from '../../../TableComponent';
import { apiCall } from '../../../../utils/apiCall';
import { useNavigate } from 'react-router-dom';
import { API_METHODS, API_ROUTES, AppRoutes } from '../../../../Constants/constants';
import { Tooltip } from 'react-tooltip'

const GetAllOrganizations = () => {

  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  const columns = [
    { Header: 'Organization Name', accessor: 'name' },
    { Header: 'Organization Email', accessor: 'email' },
    { Header: 'Slug', accessor: 'slug' },
    { Header: 'Billing Email', accessor: 'billing_email' },
    { Header: 'Actions', accessor: 'actions' },
  ];
  const data = tableData.map((row, index) => ({
    ...row,
    actions: <>
      <a className="fa fa-pencil-alt mr-rt-5" onClick={() => editOrganization(row.id, row)} data-tooltip-id="my-tooltip" data-tooltip-content="Edit"/>
      <a className="fa fa-trash" onClick={() => deleteData(row.id)} data-tooltip-id="my-tooltip" data-tooltip-content="Delete"/>
    </>,
  }));

  const fetchData = async () => {
    try {
      const data = await apiCall({
        endpoint: API_ROUTES.GET_ORGANIZATIONS_LIST,
        method: API_METHODS.GET,
      });
      console.log('Data received:', data);
      setTableData(data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const editOrganization = async (id, row) => {
    navigate(`../${AppRoutes.EDIT_ORGANIZATION}/${id}`);
    
    }
  const deleteData = async (id) => {
    try {
      const data = await apiCall({
        endpoint: `${API_ROUTES.ORGANIZATION}/${id}/delete`,
        method: 'DELETE',
      });
      console.log('After Delete received:', data);
      fetchData();

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

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
                  <li><a className="fa fa-pencil-alt" /></li>
                  <li><a  className="fa fa-trash" /></li>
                </ul></td>
            </tr>
          </tbody></table> */}
          </div>
          {/* /.row */}
        </div>{/* /.container-fluid */}
        <Tooltip id="my-tooltip" />
      </div>
      {/* /.content */}
    </div>

  )
}

export default GetAllOrganizations