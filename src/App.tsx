import React from "react";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import { Employee, dummyEmployeeList, PageEnum } from "./components/Employee.type";
import EmployeeList from "./components/EmployeeList";
import Header from "./components/Header";

const App = () => {
  const [employeeList, setEmployeeList] = React.useState(dummyEmployeeList as Employee[]);
  const [pageLoaded, setPageLoaded] = React.useState(PageEnum.list);

  const addEmpHandler = () => {
    setPageLoaded(PageEnum.add);
  };

  const showListPage = () => {
    setPageLoaded(PageEnum.list);
  };

  const addEmployee = (data: Employee) => {
    setEmployeeList([...employeeList, data]);
  };

  return (
    <>
      <div className="ui fluid container">
        <Header />
      </div>
      <div className="ui container">
        {pageLoaded === PageEnum.list ? (
          <>
            <EmployeeList list={employeeList} addEmpHandler={addEmpHandler} />
          </>
        ) : (
          <AddEmployee onBackClick={showListPage} onSubmitClickHnd={addEmployee} />
        )}
      </div>
    </>
  );
};

export default App;
