import React from 'react';
import Token from './Token';
import imgPaper from '../img/icon-paper.svg'
import imgRock from '../img/icon-rock.svg'
import imgScissors from '../img/icon-scissors.svg'
import RulesBtn from './RulesBtn';


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = { choice: '', houseChoice: '', winner:''};
    }

    random = Math.floor(Math.random() * 3)

    letChoice = (newChoice) => {
        this.setState({ choice: newChoice })
    }

    reload = () => {
        this.setState({ choice: '', houseChoice: '' })
        this.random = Math.floor(Math.random() * 3)
    }ls

    whoWins = () => {
        let test1 = {...this.state}
        if (test1.choice == 'paper' && test1.houseChoice == 'rock') {
            test1.winner = 'player'
            this.setState(test1)
            this.props.majScore(1)
        } 
        else if (test1.choice == 'rock' && test1.houseChoice == 'scissors') {
            test1.winner = 'player'
            this.setState(test1)
            this.props.majScore(1)
        }
        else if (test1.choice == 'scissors' && test1.houseChoice == 'paper') {
            test1.winner = 'player'
            this.setState(test1)
            this.props.majScore(1)
        }
        else if (test1.choice == 'paper' && test1.houseChoice == 'scissors') {
            test1.winner = 'house'
            this.setState(test1)
            this.props.majScore(-1)
        }
        else if (test1.choice == 'rock' && test1.houseChoice == 'paper') {
            test1.winner = 'house'
            this.setState(test1)
            this.props.majScore(-1)
        }
        else if (test1.choice == 'scissors' && test1.houseChoice == 'rock') {
            test1.winner = 'house'
            this.setState(test1)
            this.props.majScore(-1)
        } else {
            test1.winner = 'draw'
            this.setState(test1)
            this.props.majScore(0)
        }
        console.log(test1);
        this.reload()
    }

    render() {
        let imgHouse
        let borderColor
        let id
        switch (this.random) {
            case 0:
                this.state.houseChoice = 'paper'
                imgHouse = imgPaper
                borderColor = '#ec9e0e'
                id = 'tokenPaper'
                break;
            case 1:
                this.state.houseChoice = 'rock'
                imgHouse = imgRock
                borderColor = '#4865f4'
                id = 'tokenRock'
                break;
            case 2:
                this.state.houseChoice = 'scissors'
                imgHouse = imgScissors
                borderColor = '#dc2e4e'
                id = 'tokenScissors'
                break;
        }
        
        
        return (
            <div className="container p-5 pb-0">
                {console.log(this.state.houseChoice)}
                {/* if no choice start */}
                {this.state.choice == '' &&
                    <div id="gameBoard" className='d-flex flex-column align-items-center justify-content-center'>
                        <div className="row d-flex">
                            <div className="col-6 d-flex flex-column align-items-end justify-content-center">
                                <Token
                                    tokenSource={imgPaper}
                                    id='tokenPaper'
                                    border={'#ec9e0e'}
                                    onClick={this.letChoice}
                                    name='paper'
                                />
                            </div>

                            <div className="col-6 d-flex flex-column align-items-start justify-content-center">
                                <Token
                                    tokenSource={imgRock}
                                    id='tokenRock'
                                    border='#4865f4'
                                    onClick={this.letChoice}
                                    name='rock'
                                />
                            </div>

                        </div>

                        <div className="row d-flex">
                            <div className="col-12 d-flex flex-column align-items-center justify-content-center">
                                <Token
                                    tokenSource={imgScissors}
                                    id='tokenScissors'
                                    border='#dc2e4e'
                                    onClick={this.letChoice}
                                    name="scissors"
                                />
                            </div>
                        </div>
                    </div>
                }
                {/* if no choice end */}

                {/* if paper start */}
                {this.state.choice == 'paper' &&
                    <div id="gameBoard2">
                        <div className="row d-flex">
                            <div className="col-sm-4 col-6  d-flex flex-column align-items-center justify-content-center">
                                <h3 className="text-white text-uppercase text-center fw-bold">You</h3>
                                <Token
                                    tokenSource={imgPaper}
                                    id='tokenPaper'
                                    border='#ec9e0e'
                                    onClick={this.letChoice}
                                    name='paper'
                                />
                            </div>
                            
                            <div className="resultLg col-4 d-flex flex-column align-items-center justify-content-center">
                                {this.state.choice == 'paper' && this.state.houseChoice == 'rock' &&
                                    <h1 className='text-center text-white text-uppercase fw-bold'>Player Win</h1>
                                }
                                {this.state.choice == 'paper' && this.state.houseChoice == 'scissors' &&
                                    <h1 className='text-center text-white text-uppercase fw-bold'>House Win</h1>
                                }
                                {this.state.choice == 'paper' && this.state.houseChoice == 'paper' &&
                                    <h1 className='text-center text-white text-uppercase fw-bold'>Draw</h1>
                                }
                                <button onClick={this.whoWins} className="btn btn-outline-light text-uppercase mb-5 w-50">Play again</button>
                            </div>

                            <div className="col-sm-4 col-6  d-flex flex-column align-items-center justify-content-center">
                                <h3 className="text-white text-uppercase text-center fw-bold">house</h3>
                                <Token
                                    tokenSource={imgHouse}
                                    border={borderColor}
                                    id={id}
                                />
                            </div>
                                <div className="resultSm col-12 d-none flex-column align-items-center justify-content-center">
                                {this.state.choice == 'paper' && this.state.houseChoice == 'rock' &&
                                    <h1 className='text-center text-white text-uppercase fw-bold'>Player Win</h1>
                                }
                                {this.state.choice == 'paper' && this.state.houseChoice == 'scissors' &&
                                    <h1 className='text-center text-white text-uppercase fw-bold'>House Win</h1>
                                }
                                {this.state.choice == 'paper' && this.state.houseChoice == 'paper' &&
                                    <h1 className='text-center text-white text-uppercase fw-bold'>Draw</h1>
                                }
                                <button onClick={this.whoWins} className="btn btn-outline-light text-uppercase mb-5 w-50">Play again</button>
                                </div>
                        </div>
                    </div>
                }
                {/* if paper end */}
                {/* if rock start */}
                {this.state.choice == 'rock' &&
                    <div id="gameBoard2">
                        <div className="row d-flex">
                            <div className="col-sm-4 col-6  d-flex flex-column align-items-center justify-content-center">
                                <h3 className="text-white text-uppercase text-center fw-bold">You</h3>
                                <Token
                                    tokenSource={imgRock}
                                    id='tokenRock'
                                    border='#4865f4'
                                    onClick={this.letChoice}
                                    name='rock'
                                />
                            </div>
                            
                            <div className="resultLg col-4 d-flex flex-column align-items-center justify-content-center">
                                {this.state.choice == 'rock' && this.state.houseChoice == 'scissors' &&
                                    <h1 className='text-center text-white text-uppercase fw-bold'>Player Win</h1>
                                }
                                {this.state.choice == 'rock' && this.state.houseChoice == 'paper' &&
                                    <h1 className='text-center text-white text-uppercase fw-bold'>House Win</h1>
                                }
                                {this.state.choice == 'rock' && this.state.houseChoice == 'rock' &&
                                    <h1 className='text-center text-white text-uppercase fw-bold'>Draw</h1>
                                }
                                <button onClick={this.whoWins} className="btn btn-outline-light text-uppercase mb-5 w-50">Play again</button>
                            </div>

                            <div className="col-sm-4 col-6  d-flex flex-column align-items-center justify-content-center">
                                <h3 className="text-white text-uppercase text-center fw-bold">house</h3>
                                <Token
                                    tokenSource={imgHouse}
                                    border={borderColor}
                                    id={id}
                                />
                            </div>
                                <div className="resultSm col-12 d-none flex-column align-items-center justify-content-center">
                                {this.state.choice == 'rock' && this.state.houseChoice == 'scissors' &&
                                    <h1 className='text-center text-white text-uppercase fw-bold'>Player Win</h1>
                                }
                                {this.state.choice == 'rock' && this.state.houseChoice == 'paper' &&
                                    <h1 className='text-center text-white text-uppercase fw-bold'>House Win</h1>
                                }
                                {this.state.choice == 'rock' && this.state.houseChoice == 'rock' &&
                                    <h1 className='text-center text-white text-uppercase fw-bold'>Draw</h1>
                                }
                                <button onClick={this.whoWins} className="btn btn-outline-light text-uppercase mb-5 w-50">Play again</button>
                                </div>
                        </div>
                    </div>
                }
                {/* if rock end */}

                {/* if scissors start */}
                {this.state.choice == 'scissors' &&
                    <div id="gameBoard2">
                        <div className="row d-flex">
                            <div className="col-sm-4 col-6  d-flex flex-column align-items-center justify-content-center">
                                <h3 className="text-white text-uppercase fw-bold">You</h3>
                                <Token
                                    tokenSource={imgScissors}
                                    id='tokenScissors'
                                    border='#dc2e4e'
                                    onClick={this.letChoice}
                                    name='scissors'
                                />
                            </div>
                            
                            <div className="resultLg col-4 d-flex flex-column align-items-center justify-content-center">
                                {this.state.choice == 'scissors' && this.state.houseChoice == 'paper' &&
                                    <h1 className='text-center text-white text-uppercase fw-bold'>Player Win</h1>
                                }
                                {this.state.choice == 'scissors' && this.state.houseChoice == 'rock' &&
                                    <h1 className='text-center text-white text-uppercase fw-bold'>House Win</h1>
                                }
                                {this.state.choice == 'scissors' && this.state.houseChoice == 'scissors' &&
                                    <h1 className='text-center text-white text-uppercase fw-bold'>Draw</h1>
                                }
                                <button onClick={this.whoWins} className="btn btn-outline-light text-uppercase mb-5 w-50">Play again</button>
                            </div>

                            <div className="col-sm-4 col-6  d-flex flex-column align-items-center justify-content-center">
                                <h3 className="text-white text-uppercase text-center fw-bold">house</h3>
                                <Token
                                    tokenSource={imgHouse}
                                    border={borderColor}
                                    id={id}
                                />
                            </div>
                                <div className="resultSm col-12 d-none flex-column align-items-center justify-content-center">
                                {this.state.choice == 'scissors' && this.state.houseChoice == 'paper' &&
                                    <h1 className='text-center text-white text-uppercase fw-bold'>Player Win</h1>
                                }
                                {this.state.choice == 'scissors' && this.state.houseChoice == 'rock' &&
                                    <h1 className='text-center text-white text-uppercase fw-bold'>House Win</h1>
                                }
                                {this.state.choice == 'scissors' && this.state.houseChoice == 'scissors' &&
                                    <h1 className='text-center text-white text-uppercase fw-bold'>Draw</h1>
                                }
                                <button onClick={this.whoWins} className="btn btn-outline-light text-uppercase mb-5 w-50">Play again</button>
                                </div>
                        </div>
                    </div>
                }
                {/* if scissors end */}
                <div className="row w-100 d-flex justify-content-end">
                    <RulesBtn />
                </div>
            </div>
        );
    }
}

export default Game;