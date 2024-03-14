import React from 'react'

const CreateOrganization = () => {
  return (
   <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-12">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Organization</a></li>
            <li className="breadcrumb-item active">Add Organization</li>
          </ol>
          <h3 className="m-0 font-weight-bold clr-w pb10">Organization</h3>
          <h5 className="clr-w min50">&nbsp;</h5>
          {/*<p class="clr-g">Scroll down to see quick links and overviews of your Server, To do list
Order status or get some Help using Nifty.</p>*/}
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="mb-4 offset-xl-3 col-xl-5">
          <div className="card minh445">
            <div className="card-body">
              <h4 className="text-center">Create New Organization<br /><br /></h4>
              <form action>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Organization Name</label>
                  <input type="email" className="form-control" placeholder="Enter title" />
                </div>
                <div className="form-group">
                  <label>Organization Slug</label>
                  <input type="email" className="form-control" placeholder="Enter title" />
                </div>
                <div className="form-group">
                  <label>Label Name</label>
                  <input type="email" className="form-control" placeholder="Enter title" />
                </div>
                <div className="form-group">
                  <label>Label Name</label>
                  <input type="email" className="form-control" placeholder="Enter title" />
                </div>
                <div className="form-group">
                  <button type="button" className="btn btn-block btn-success">Create</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default CreateOrganization