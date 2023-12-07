// profile.model.ts

export interface Profile {
    id: number;
    name: string;
    lastname: string;
    email: string;
    city: string;
    country: string;
    frameworks: Framework[];
    hobbies: Hobby[];
  }
  
export interface Hobby {
    name: string;
    description: string;
}

export interface Framework {
    name: string;
    level: string;
    year: number;
}
  