import React, { useEffect, useState } from 'react'
import TableComponent from '../../../TableComponent';
import { apiCall } from '../../../../utils/apiCall';
import { useNavigate } from 'react-router-dom';
import { API_METHODS, API_ROUTES, AppRoutes } from '../../../../Constants/constants';
import { Tooltip } from 'react-tooltip'

const GetAllSettings = () => {

  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  const columns = [
    { Header: 'Url', accessor: 'url' },
    { Header: 'Disk size', accessor: 'disk' },
    { Header: 'Max Datasets', accessor: 'max_datasets' },
    { Header: 'Max Projects', accessor: 'max_projects' },
    { Header: 'Actions', accessor: 'actions' },
  ];
  const data = tableData.map((row, index) => ({
    ...row,
    url: row.api_url,
    disk: row.data_limit_mb,
    max_datasets: row.max_datasets,
    max_projects: row.max_projects,
    actions: <div className='actions'>
      <a className="fa fa-eye" onClick={() => viewOrganization(row?.organization, row)} data-tooltip-id="my-tooltip" data-tooltip-content="View" />
      <a className="fa fa-pencil-alt" onClick={() => editOrganization(row?.organization, row)} data-tooltip-id="my-tooltip" data-tooltip-content="Edit" />
      <a className="fa fa-trash" onClick={() => deleteData(row?.organization)} data-tooltip-id="my-tooltip" data-tooltip-content="Delete" />
    </div>,
  }));

  const fetchData = async () => {
    try {
      const data = await apiCall({
        endpoint: API_ROUTES.GET_ORGANIZATIONS_SETTINGS_LIST,
        method: API_METHODS.GET,
      });
      console.log('Data received:', data);
      setTableData(data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const editOrganization = async (id, row) => {
    navigate(`../${AppRoutes.EDIT_SETTING}/${id}`);
  }

  const viewOrganization = async (id, row) => {
    navigate(`../${AppRoutes.VIEW_SETTING}/${id}`)
  }
  const deleteData = async (id) => {
    try {
      const data = await apiCall({
        endpoint: `${API_ROUTES.ORGANIZATION}/${id}/settings-delete`,
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
                <li className="breadcrumb-item active">All Organization Setting</li>
              </ol>
              <h1 className="m-0 font-weight-bold clr-w pb10">Organization</h1>
              <h5 className="clr-w min50">&nbsp;</h5>
              {/*<p class="clr-g">Scroll down to see quick links and overviews of your Server, To do list
Order status or get some Help using Nifty.</p>*/}
            </div>

          </div>
        </div>
      </div>

      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <TableComponent
              columns={columns}
              data={data}
            />
          </div>
        </div>{/* /.container-fluid */}
        <Tooltip id="my-tooltip" />
      </div>
      {/* /.content */}
    </div>

  )
}

export default GetAllSettings