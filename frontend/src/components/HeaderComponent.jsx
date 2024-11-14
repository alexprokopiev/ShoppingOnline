import {Component} from "react";

export default class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        //let url = process.env.REACT_APP_FRONTEND_URL ? process.env.REACT_APP_FRONTEND_URL : "http://localhost:3000/";

        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="http://localhost:3000/" className="navbar-brand">Employee Management App</a>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}