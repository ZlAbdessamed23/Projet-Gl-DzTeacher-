import axios from 'axios';
import { 
  RegisterUser, 
  LoginUser, 
  Teacher, 
  Course, 
  StudentPayment, 
  Document, 
  LightDocument 
} from '../Types/types';

const API_URL = ''; // Replace with actual base URL

export const signup = async (user: RegisterUser) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (user: LoginUser) => {
  try {
    const response = await axios.post(`${API_URL}/login`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTeachers = async () => {
  try {
    const response = await axios.get<Teacher[]>(`${API_URL}/teachers`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getStudentCourses = async () => {
  try {
    const response = await axios.get<Course[]>(`${API_URL}/student/courses`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getStudentPayments = async () => {
  try {
    const response = await axios.get<StudentPayment[]>(`${API_URL}/student/payments`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getStudentDocuments = async () => {
  try {
    const response = await axios.get<Document[]>(`${API_URL}/student/documents`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getStudentDocumentById = async (documentId: string) => {
  try {
    const response = await axios.get<LightDocument>(`${API_URL}/student/documents/${documentId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};