export interface ITeacher {
  firstName: string;
  lastName: string;
}

export interface IDay {
  date: string;
  marks: {
    10: string[];
    9: string[];
    8: string[];
    7: string[];
    6: string[];
    5: string[];
    4: string[];
    3: string[];
    2: string[];
    1: string[];
    0: string[];
  };
}

export interface ISubject {
  id: string;
  title: string;
  studentsId: string[];
  teacher: ITeacher;
  dates: IDay[];
}

export enum SubjectFieldNames {
  firstName = "Name",
  lastName = "Last Name",
  average = "Average Mark"
}

export const SUBJECT_FIELDS_KEYS: string[]  = ['firstName', 'lastName', 'average'];
