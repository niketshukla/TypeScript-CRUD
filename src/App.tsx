import React from "react";
import "./App.css";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import { Employee, dummyEmployeeList, PageEnum } from "./components/Employee.type";
import Header from "./components/Header";

const App = () => {
  const [employeeList, setEmployeeList] = React.useState(dummyEmployeeList as Employee[]);
  const [pageLoaded, setPageLoaded] = React.useState(PageEnum.list);
  const [showEditRecord, setShowEditRecord] = React.useState({} as Employee);

  const addEmpHandler = () => {
    setPageLoaded(PageEnum.add);
    console.log(PageEnum.add);
  };

  const showListPage = () => {
    setPageLoaded(PageEnum.list);
  };

  const showEditPage = (data: Employee) => {
    setPageLoaded(PageEnum.edit);
    setShowEditRecord(data);
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

  const onUpdateClickHnd = (data: Employee) => {
    const filteredData = employeeList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = employeeList.indexOf(filteredData);
    const tempData = [...employeeList];
    tempData[indexOfRecord] = data;
    setEmployeeList(tempData);
  };

  return (
    <>
      <div className="ui fluid container">
        <Header />
      </div>
      <div className="ui container">
        {pageLoaded === PageEnum.list && (
          <EmployeeList
            list={employeeList}
            addEmpHandler={addEmpHandler}
            deleteEmpHandler={deleteEmpHandler}
            showEditPage={showEditPage}
          />
        )}
        {pageLoaded === PageEnum.add && (
          <AddEmployee onBackClick={showListPage} onSubmitClickHnd={addEmployee} />
        )}
        {pageLoaded === PageEnum.edit && (
          <EditEmployee
            onBackClick={showListPage}
            showEditRecord={showEditRecord}
            onUpdateClickHnd={onUpdateClickHnd}
          />
        )}
      </div>
    </>
  );
};

export default App;
