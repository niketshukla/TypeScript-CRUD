import React from "react";
import "../styles/AddEmployee.css";
import { useInputHandler } from "../CustomHooks/useUserInput";
import { Employee } from "./Employee.type";

type Props = {
  onBackClick: () => void; // this is the way to write type for callback function
  onSubmitClickHnd: (data: Employee) => void;
};

const AddEmployee = (props: Props) => {
  const { onBackClick, onSubmitClickHnd } = props;

  const [firstName, setFirstName] = useInputHandler("");
  const [lastName, setLastName] = useInputHandler("");
  const [email, setEmail] = useInputHandler("");

  const onAddEmpClick = (e: any) => {
    e.preventdefault();
    const data: Employee = {
      id: new Date().toJSON().toString(),
      firstname: firstName,
      lastname: lastName,
      email: email,
    };
    onSubmitClickHnd(data);
  };

  return (
    <>
      <h2 className="ui center aligned header pageHeader">Add Employee Form</h2>
      <form className="ui form center addEmpForm" onSubmit={onAddEmpClick}>
        <div className="field">
          <label>First Name</label>
          <input
            type="text"
            name="first-name"
            placeholder="First Name"
            value={firstName}
            onChange={setFirstName}
          />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input
            type="text"
            name="last-name"
            placeholder="Last Name"
            value={lastName}
            onChange={setLastName}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input type="text" name="email" placeholder="Email" value={email} onChange={setEmail} />
        </div>
        <button className="ui primary button" type="submit">
          Add Employee
        </button>
        <button className="ui button" onClick={onBackClick}>
          Back
        </button>
      </form>
    </>
  );
};

export default AddEmployee;
