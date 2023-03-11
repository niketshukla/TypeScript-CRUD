import { useInputHandler } from "../CustomHooks/useUserInput";
import "../styles/AddEmployee.css";
import { Employee } from "./Employee.type";

type Props = {
  onBackClick: () => void; // this is the way to write type for callback function
  showEditRecord: Employee;
  onUpdateClickHnd: (data: Employee) => void;
};

const EditEmployee = (props: Props) => {
  const { onBackClick, showEditRecord, onUpdateClickHnd } = props;

  const [firstName, setFirstName] = useInputHandler(showEditRecord.firstname);
  const [lastName, setLastName] = useInputHandler(showEditRecord.lastname);
  const [email, setEmail] = useInputHandler(showEditRecord.email);

  const onUpdateEmpClick = (e: any) => {
    e.preventDefault();
    const updatedData: Employee = {
      id: showEditRecord.id,
      firstname: firstName,
      lastname: lastName,
      email: email,
    };
    onUpdateClickHnd(updatedData);
    onBackClick();
  };

  return (
    <>
      <h2 className="ui center aligned header pageHeader">Edit Employee Record</h2>
      <form className="ui form center addEmpForm" onSubmit={onUpdateEmpClick}>
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
          Update Employee
        </button>
        <button className="ui button" onClick={onBackClick}>
          Back
        </button>
      </form>
    </>
  );
};

export default EditEmployee;
