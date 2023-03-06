import React from "react";
import "../styles/EmployeeList.css";
import { Employee } from "./Employee.type";

type Props = {
  list: Employee[];
  addEmpHandler: () => void; // this is the way to write type for callback function
};

const EmployeeList = (props: Props) => {
  const { list, addEmpHandler } = props;
  return (
    <div>
      <h2 className="ui center aligned header pageHeader">Employee List</h2>
      <button className="ui primary button addEmp" onClick={addEmpHandler}>
        Add Employee
      </button>
      <table className="ui striped table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date Joined</th>
            <th>E-mail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((emp) => {
            return (
              <tr key={emp.id}>
                <td>{`${emp.firstname} ${emp.lastname}`}</td>
                <td>September 14, 2013</td>
                <td>{emp.email}</td>
                <td>
                  <button className="ui primary button">View</button>
                  <button className="ui primary button">Edit</button>
                  <button className="ui primary button">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
