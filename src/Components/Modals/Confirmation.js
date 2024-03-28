const Confirmation = ({ onClose, onContinue }) => {

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
                                <h4>Are you sure you want to Delete</h4>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer justify-content-between">
                        <button type="button" className="card-link btn-default btn" onClick={onClose}>
                            No
                        </button>
                        <button type="button" className="card-link btn-primary btn" onClick={onContinue}>
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Confirmation