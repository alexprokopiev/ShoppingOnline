import {Component} from "react";
import EmployeeService from "../services/EmployeeService";

export default class ViewEmployeeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: window.location.toString().slice(window.location.toString().lastIndexOf('/') + 1),
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({
                employee: res.data
            });
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Employee Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Employee First Name: </label>
                            <div> {this.state.employee.firstname}</div>
                        </div>
                        <div className="row">
                            <label> Employee Last Name: </label>
                            <div> {this.state.employee.lastname}</div>
                        </div>
                        <div className="row">
                            <label> Employee Email: </label>
                            <div> {this.state.employee.email}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}