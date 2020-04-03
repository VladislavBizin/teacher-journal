export interface IStudent {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  subjects: string[];
  description: string;
}

export class StudentModel implements IStudent {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public address: string,
    public subjects: string[] = [],
    public description: string = '',
  ) {
    this.email = email || '';
    this.address = address || '';
    this.description = description || '';
  }
}

export enum STUDENTS_GRID_FIELDS {
  id = 'id',
  firstName = 'firstName',
  lastName = 'lastName',
  email = 'email',
  address = 'address',
  description = 'description'
}

export interface IGridStudentsConfig {
  totalColumnSize: number;
  keys: string[];
  colSizes: {};
  titleNames: {[key in STUDENTS_GRID_FIELDS]: string};
}

export const TITLE_CONFIG: {[key in STUDENTS_GRID_FIELDS]: string} = {
  id: '',
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  address: 'Address',
  description: 'Description'
};

export const STUDENTS_GRID_HEADER_CONFIG: IGridStudentsConfig = {
  totalColumnSize: 16,
  keys: [
    STUDENTS_GRID_FIELDS.id,
    STUDENTS_GRID_FIELDS.firstName,
    STUDENTS_GRID_FIELDS.lastName,
    STUDENTS_GRID_FIELDS.email,
    STUDENTS_GRID_FIELDS.address,
    STUDENTS_GRID_FIELDS.description
  ],
  colSizes: {
    id: 2,
    firstName: 2,
    lastName: 2,
    email: 4,
    address: 4,
    description: 2
  },
  titleNames: TITLE_CONFIG
};

export const STUDENT_GRID_TABLE_CONFIG: IGridStudentsConfig = {
  totalColumnSize: 16,
  keys: [
    STUDENTS_GRID_FIELDS.id,
    STUDENTS_GRID_FIELDS.firstName,
    STUDENTS_GRID_FIELDS.lastName,
    STUDENTS_GRID_FIELDS.email,
    STUDENTS_GRID_FIELDS.address,
    STUDENTS_GRID_FIELDS.description
  ],
  colSizes: {
    id: 1,
    firstName: 2,
    lastName: 2,
    email: 4,
    address: 4,
    description: 2
  },
  titleNames: TITLE_CONFIG
};
