import {
  deleteStudent,
  findAllStudents,
  insertStudent,
  updateStudent,
} from "../models/student";
import { Student } from "../interfaces/student";
// Obtener todos los alumnos
export const findAll = async (limit: number, offset: number) => {
  return await findAllStudents(limit, offset);
};
export const update = async (id: number, student: Student) => {
  return await updateStudent(id, student);
};
export const insert = async (student: Student) => {
  return await insertStudent(student);
};
export const deleteById = async (id: number) => {
  return await deleteStudent(id);
};
