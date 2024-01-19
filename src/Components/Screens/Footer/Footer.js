const Footer = () => {
  return (
    <div>
      <div>
        <aside className="control-sidebar control-sidebar-dark">
          {/* Control sidebar content goes here */}
          <div className="p-3">
            <h5>Title</h5>
            <p>Sidebar content</p>
          </div>
        </aside>
        {/* /.control-sidebar */}
        {/* Main Footer */}
        <footer className="main-footer">
          {/* To the right */}
          <div className="float-right d-none d-sm-inline">
            Anything you want
          </div>
          {/* Default to the left */}
          <strong>
            Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.
          </strong>{" "}
          All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Footer;
