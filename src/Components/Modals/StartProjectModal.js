import React, { useState } from "react";

const StartProjectModal = ({ onClose, onContinue }) => {

  const [projectName, SetProjectName] = useState('');

  const InputHandler = (event) => {
    SetProjectName(event.target.value);
  }

  return (
    <div>
      <div className="modal-dialog">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">Start New Project</h4>
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
                <p className="card-text text-left">
                  Build and automate your own machine learning project with
                  advanced workspaces, model visualization, pipelines and model
                  serving.
                </p>
                <div className="form-group">
                  <label htmlFor>Name Your Project</label>
                  <input type="text" onChange={InputHandler} className="form-control" />
                </div>
                <h6>
                  <strong>Bring Your files</strong> (optional)
                </h6>
                <div className="upload-connect">
                  <ul>
                    <li>
                      <a className="btn btn-app">
                        <i className="fas fa-edit" /> Connect Git
                      </a>
                    </li>
                    <li>
                      <a className="btn btn-app">
                        <i className="fas fa-upload" /> Upload File
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer justify-content-between">
            <button
              type="button"
              className="btn btn-default"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="button" className="btn btn-primary" onClick={() => onContinue(projectName)}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartProjectModal;
