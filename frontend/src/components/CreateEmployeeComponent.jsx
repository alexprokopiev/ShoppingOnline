import {Component} from "react";
import EmployeeService from "../services/EmployeeService";

export default class CreateEmployeeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: window.location.toString().slice(window.location.toString().lastIndexOf('/') + 1),
            firstname: '',
            lastname: '',
            email: '',
            homePage: window.location.origin
        }
        this.changeFirstnameHandler = this.changeFirstnameHandler.bind(this);
        this.changeLastnameHandler = this.changeLastnameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount() {
        if (this.state.id !== '_add') {
            EmployeeService.getEmployeeById(this.state.id).then(res => {
                let employee = res.data;
                this.setState({
                    firstname: employee.firstname,
                    lastname: employee.lastname,
                    email: employee.email
                });
            })
        }
    }

    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email
        }
        console.log('employee =>' + JSON.stringify(employee));

        if (this.state.id === '_add') {
            EmployeeService.createEmployee(employee).then(() => {
                window.location.assign(`${this.state.homePage}/employees`);
            })
        } else {
            EmployeeService.updateEmployee(employee, this.state.id).then(() => {
                window.location.assign(`${this.state.homePage}/employees`);
            })
        }
    }

    changeFirstnameHandler = (event) => {
        this.setState({firstname: event.target.value});
    }

    changeLastnameHandler = (event) => {
        this.setState({lastname: event.target.value})
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    cancel() {
        window.location.assign(`${this.state.homePage}/employees`);
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Employee</h3>
        } else {
            return <h3 className="text-center">Update Employee</h3>
        }
    }

    render() {
        return (
            <div>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstname" className="form-control"
                                               value={this.state.firstname} onChange={this.changeFirstnameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastname" className="form-control"
                                               value={this.state.lastname} onChange={this.changeLastnameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Email: </label>
                                        <input placeholder="Email Address" name="email" className="form-control"
                                               value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>
                                        Save
                                    </button>
                                    <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px"}}>
                                        Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}