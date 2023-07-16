export type IBookFilters = {
  searchTerm?: string;
  id?: string;
  email?: string;
  contactNo?: string;
  emergencyContactNo?: string;
  gender?: "male" | "female";
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  academicDepartment?: string;
  academicFaculty?: string;
  designation?: string;
};
