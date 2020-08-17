import React from 'react';
import parse from 'html-react-parser';

const GamePlatform = ({ platform }) => {
  return (
    <div className="my-2 text-center">
      <div className="border-warning card">
        <div className="card-body p-2">
          <h4 className="card-title text-weight-bold">
            {platform.platform.name}
          </h4>
          {platform.requirements && (
            <div>
              <button
                type="button"
                className="btn btn-danger"
                data-toggle="modal"
                data-target="#requirementsModal"
              >
                See Requirements
              </button>
              <div
                className="modal fade"
                id="requirementsModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="requirementsModalTitle"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="requirementsModalTitle">
                        Requirements
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body text-left">
                      {platform.requirements.minimum && (
                        <div className="mb-2">
                          {/* <h5 className="lead">Minimum</h5> */}
                          {parse(platform.requirements.minimum)}
                        </div>
                      )}
                      <hr />
                      {platform.requirements.recommended && (
                        <div className="mb-2">
                          {/* <h5 className="lead">Recommended</h5> */}
                          {parse(platform.requirements.recommended)}
                        </div>
                      )}
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="card-footer text-muted py-1">
          Released at: {platform.released_at}
        </div>
      </div>
    </div>
  );
};

export default GamePlatform;
