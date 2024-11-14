import {BrowserRouter, Route, Routes} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path = "/" exact element = {<ListEmployeeComponent/>}></Route>
            <Route path = "/employees" element = {<ListEmployeeComponent/>}></Route>
            <Route path = "/add-employee/:id" element = {<CreateEmployeeComponent/>}></Route>
            <Route path = "/view-employee/:id" element = {<ViewEmployeeComponent/>}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
