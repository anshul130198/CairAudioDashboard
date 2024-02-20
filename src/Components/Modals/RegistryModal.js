const RegistryModal = ({ onClose, onContinue }) => {
  return (
    <div>
      <div className="modal-dialog">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">Start New Project</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" onClick={onClose}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className=" br10">
              <div className="card-body p0">
                <form action>
                  <div className="form-group">
                    <label>Select Company</label>
                    <select
                      className="form-control select2"
                      style={{ width: "100%" }}
                    >
                      <option selected="selected">Intel</option>
                      <option>Habana</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Registry URL</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter title"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter title"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-footer justify-content-between">
            <button type="button" className="card-link btn-default btn" onClick={onClose}>
              Cancel
            </button>
            <button type="button" className="card-link btn-primary btn">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistryModal;
