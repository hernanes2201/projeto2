// Define any custom types that might be needed throughout the application

export interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialType {
  id: string;
  content: string;
  author: string;
  role: string;
  company: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}