import React from 'react';

class main extends React.Component{
    constructor()
    {
        super();

        this.state = 
        {
            message: '',
            visible: false
        }
    }

    onClickEmail = (e) => {
        navigator.clipboard.writeText("Marketing@Opulence-Media.com");
        this.setState({message: 'Copied Email To Clipboard', visible: true});
        setTimeout(() => {
            this.setState({visible: false});
        }, 3000);
    }

    onClickDiscord = (e) => {
        navigator.clipboard.writeText("Opulence Media#2340");
        this.setState({message: 'Copied Discord To Clipboard', visible: true});
        setTimeout(() => {
            this.setState({visible: false});
        }, 3000);
    }

    render ()
    {
        return (
            <div className="main-box">
                <h1 className="logo"><span className="logo-custom-color">Opulence</span> Media</h1>
                <div>
                    <ul className="nav">
                        <li className="nav-item"><a href="#" onClick={this.onClickEmail}>Email</a></li>
                        <li className="nav-item"><a href="#" onClick={this.onClickDiscord}>Discord</a></li>
                        <li className="nav-item"><a href="#">Twitter</a></li>
                    </ul>
                    <p className={this.state.visible ? 'fadeIn':'fadeOut'} style={{visibility: this.state.visible}}>{this.state.message}</p>
                </div>
            </div>
        )
    }
}

export default main;