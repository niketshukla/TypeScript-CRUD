export interface Employee {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
}

export const dummyEmployeeList: Employee[] = [
  {
    id: new Date().toJSON().toString(),
    firstname: "Test",
    lastname: "Tlast",
    email: "test@gmail.com",
  },
];

export enum PageEnum {
  list,
  add,
  edit,
}
