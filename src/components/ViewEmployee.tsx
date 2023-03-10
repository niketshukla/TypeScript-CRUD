import "../styles/ModalStyle.css";
import { Employee } from "./Employee.type";

type Props = {
  onModalClose: () => void;
  data: Employee;
};

const ViewEmployee = (props: Props) => {
  const { onModalClose, data } = props;

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onModalClose}>
          &times;
        </span>
        <div>
          <h1>Employee Details</h1>
          <ul className="modalList">
            <li>
              <span>First Name:</span> {data.firstname}
            </li>
            <li>
              <span>Last Name:</span> {data.lastname}
            </li>
            <li>
              <span>Email ID:</span> {data.email}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
