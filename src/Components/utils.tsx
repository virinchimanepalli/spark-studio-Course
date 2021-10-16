export interface ICourse {
  class_requirements: string[];
  course_name: string;
  details: string;
  hours_of_class_per_month: number;
  skills_required: string[];
}

export const API = "https://60311c91081a010017546ce1.mockapi.io/api/courses";
