import EmployeeService from "../services/EmployeeService";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

function ListEmployeeComponent() {

    const [employees,setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        EmployeeService.getEmployees().then(res => {
            setEmployees(res.data);
        });
    }, [])

    const addEmployee = () => {
        //window.location.assign(`${window.location}add-employee/_add`);
        navigate('/add-employee/_add');
    }

    const viewEmployee = (id) => {
        navigate(`/view-employee/${id}`);
    }

    const editEmployee = (id) => {
        navigate(`/add-employee/${id}`);
    }

    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id).then(() => {
            setEmployees(employees.filter(employee => employee.id !== id));
        });
    }

    return (
        <div>
            <h2 className="text-center">Employees List</h2>
            <div className="row">
                <button className="btn btn-primary" onClick={addEmployee}> Add Employee</button>
            </div>
            <br/>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(
                                employee =>
                                    <tr key={employee.id}>
                                        <td> {employee.firstname} </td>
                                        <td> {employee.lastname}</td>
                                        <td> {employee.email}</td>
                                        <td>
                                            <button onClick={() => editEmployee(employee.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick={() => deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                            <button style={{marginLeft: "10px"}} onClick={() => viewEmployee(employee.id)} className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListEmployeeComponent;



// import {Component} from "react";
// import EmployeeService from "../services/EmployeeService";
//
// class ListEmployeeComponent extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             employees: []
//         }
//
//         this.addEmployee = this.addEmployee.bind(this);
//         this.editEmployee = this.editEmployee.bind(this);
//         this.deleteEmployee = this.deleteEmployee.bind(this);
//     }
//
//     deleteEmployee(id) {
//         EmployeeService.deleteEmployee(id).then(res => {
//             this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
//         });
//     }
//
//     viewEmployee(id) {
//         window.location.assign(`${window.location}view-employee/${id}`);
//     }
//
//     editEmployee(id){
//         window.location.assign(`${window.location}add-employee/${id}`);
//     }
//
//     componentDidMount() {
//         EmployeeService.getEmployees().then(res => {
//             this.setState({employees: res.data});
//         });
//     }
//
//     addEmployee() {
//         // window.location.assign(`${window.location}add-employee/_add`);
//         // this.props.history.push('/add-employee/_add');
//     }
//
//     render() {
//         return (
//             <div>
//                 <h2 className="text-center">Employees List</h2>
//                 <div className="row">
//                     <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
//                 </div>
//                 <br/>
//                 <div className="row">
//                     <table className="table table-striped table-bordered">
//                         <thead>
//                             <tr>
//                                 <th>Employee First Name</th>
//                                 <th>Employee Last Name</th>
//                                 <th>Employee Email</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 this.state.employees.map(
//                                     employee =>
//                                         <tr key={employee.id}>
//                                             <td> {employee.firstname} </td>
//                                             <td> {employee.lastname}</td>
//                                             <td> {employee.email}</td>
//                                             <td>
//                                                 <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">Update</button>
//                                                 <button style={{marginLeft: "10px"}} onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
//                                                 <button style={{marginLeft: "10px"}} onClick={() => this.viewEmployee(employee.id)} className="btn btn-info">View</button>
//                                             </td>
//                                         </tr>
//                                 )
//                             }
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default ListEmployeeComponent;