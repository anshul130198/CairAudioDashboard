const Error = () => {
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-12 text-center">
                            <h1 className="m-0 font-weight-bold clr-w pb10 heading-404">404</h1>
                            <span className="pagenot-subhead">Page Not Found</span>
                            <p className="clr-w min50">Sorry, but the page you are looking for has not been found on our server.</p>
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
                            <form className="search-form">
                                <div className="input-group">
                                    <input type="text" name="search" className="form-control" placeholder="Search" />
                                    <div className="input-group-append">
                                        <button type="submit" name="submit" className="btn btn-warning"><i className="fas fa-search" />
                                        </button>
                                    </div>
                                </div>
                                {/* /.input-group */}
                            </form>
                        </div>
                    </div>
                    {/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            {/* /.content */}
        </div>

    )
}

export default Error