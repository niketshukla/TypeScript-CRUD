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
    console.log(PageEnum.add);
  };

  const showListPage = () => {
    setPageLoaded(PageEnum.list);
  };

  const addEmployee = (data: Employee) => {
    setEmployeeList([...employeeList, data]);
  };

  const deleteEmpHandler = (data: Employee) => {
    // const indexToDelete = employeeList.indexOf(data);
    // const tempList = [...employeeList];

    // tempList.splice(indexToDelete, 1);
    // setEmployeeList(tempList);
    setEmployeeList(
      employeeList.filter((emp) => {
        return emp.id !== data.id;
      })
    );
  };

  return (
    <>
      <div className="ui fluid container">
        <Header />
      </div>
      <div className="ui container">
        {pageLoaded === PageEnum.list ? (
          <>
            <EmployeeList
              list={employeeList}
              addEmpHandler={addEmpHandler}
              deleteEmpHandler={deleteEmpHandler}
            />
          </>
        ) : (
          <AddEmployee onBackClick={showListPage} onSubmitClickHnd={addEmployee} />
        )}
      </div>
    </>
  );
};

export default App;
