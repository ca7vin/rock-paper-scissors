import React from 'react';

class Header extends React.Component {
    
    render() {
        return (
            <div id='header' className="container-fluid mt-5 p-3">
                <div className="row justify-content-center">
                    <div className="col-6 d-flex flex-column justify-content-center">
                        <h1 className="titleH1 mb-0 text-white text-uppercase">Rock</h1>
                        <h1 className="titleH1 mb-0 text-white text-uppercase">Paper</h1>
                        <h1 className="titleH1 mb-0 text-white text-uppercase">Scissors</h1>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center align-items-end">
                        <div className="container d-flex flex-column align-items-center w-50 bg-white p-3 rounded m-0">
                            <h5 className="darkText text-uppercase fw-bold">Score</h5>
                            <h1 className="scoreText fw-bold">{this.props.score}</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;