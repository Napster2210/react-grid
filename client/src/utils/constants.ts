export const API_URL = 'http://localhost:5000';

export interface User {
  firstName: string;
  lastName: string;
  role: 'admin' | 'partner';
  email: string;
  status: 'active' | 'inactive';
};


