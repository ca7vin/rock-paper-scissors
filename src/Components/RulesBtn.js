import React from 'react';
import imgRules from '../img/image-rules.svg'

class RulesBtn extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="d-flex align-items-lg-end align-items-center justify-content-center justify-content-lg-end">
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-outline-light text-uppercase mb-5">rules</button>
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-center" id="exampleModalLabel">RULES</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body d-flex align-items-center justify-content-center">
                                <img src={imgRules} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RulesBtn;