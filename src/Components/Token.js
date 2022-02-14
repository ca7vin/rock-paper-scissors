import React from 'react';

class Token extends React.Component {
    constructor(props) {
        super(props);
    }
    click = () => {
        this.props.onClick(this.props.name)
    }
    render() { 
        return ( 
            <div onClick={this.click} className="token shadow rounded-circle bg-white d-flex align-items-center justify-content-center" style={{border:'20px solid' + this.props.border}} id={this.props.id}>
                <img className="w-50" src={this.props.tokenSource} alt=""/>
            </div>
         );
    }
}
 
export default Token;