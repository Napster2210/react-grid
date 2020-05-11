export const API_URL = 'http://localhost:5000';
/**
 * Interface for User
 *
 * @export
 * @interface User
 */
export interface User {
  firstName: string;
  lastName: string;
  role: 'admin' | 'partner';
  email: string;
  status: 'active' | 'inactive';
};


