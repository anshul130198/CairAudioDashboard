const CommitMsgModal = ({ onClose, onSync }) => {
  return (
    <div>
      <div className="modal-dialog">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <button
              type="button"
              className="close"
              onClick={onClose}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className=" br10">
              <div className="card-body p0">
                <div className="form-group">
                  <label>Commit Message</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer justify-content-between">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onSync()}
            >
              Sync
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitMsgModal;
