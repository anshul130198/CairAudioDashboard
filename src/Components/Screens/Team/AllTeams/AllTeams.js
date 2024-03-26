import { useState } from "react";
import TableComponent from "../../../TableComponent";

const AllTeams = () => {
    const [tableData, setTableData] = useState([
        {
          status: 'Active',
          repositoryName: 'Python3.predict.py',
          tag: 'Success',
          registryName: 'Test123',
          createdBy: '2024-12-14, 5:21:55 pm',
        },
        {
            status: 'Active',
            repositoryName: 'Python3.predict.py',
            tag: 'Success',
            registryName: 'cyz123',
            createdBy: '2024-12-14, 5:21:55 pm',
          },
          {
            status: 'Active',
            repositoryName: 'Python3.predict.py',
            tag: 'Success',
            registryName: 'Xyz12',
            createdBy: '2024-12-14, 5:21:55 pm',
          },
        // Add more data as needed
      ]);
      const columns = [
        { Header: 'Status', accessor: 'status' },
        { Header: 'Repository Name', accessor: 'repositoryName' },
        { Header: 'Tag', accessor: 'tag' },
        { Header: 'Registry Name', accessor: 'registryName' },
        { Header: 'Created By', accessor: 'createdBy' },
      ];
      const data = tableData.map((row) => ({ ...row }));
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Team</a></li>
                            </ol>
                            <h1 className="m-0 font-weight-bold clr-w pb10">Create Team</h1>
                            <h5 className="clr-w min50">&nbsp;</h5>
                            {/*<p class="clr-g">Scroll down to see quick links and overviews of your Server, To do list
Order status or get some Help using Nifty.</p>*/}
                        </div>{/* /.col */}
                        <div className="col-sm-3 offset-xl-3 padt20">
                            <button type="button" className="btn btn-block btn-success col-sm-8" data-toggle="modal" data-target="#registries">Create</button>
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
                    <TableComponent columns={columns} data={data} />
                
                    </div>
                    {/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            {/* /.content */}
        </div>

    )
}

export default AllTeams