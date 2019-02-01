import React, { Component } from 'react';

const divStyle = {
    backgroundColor: 'blue'
};

class header extends Component {
    render() {
        return (
            <div>
                <nav style={{backgroundColor: '#4267b2', radius: 0}} className="navbar">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a style={{color: '#ffffff'}} className="navbar-brand" href="#">Facebook</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default header;
