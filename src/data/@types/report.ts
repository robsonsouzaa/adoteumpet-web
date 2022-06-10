import { Pet } from "./Pet";

export interface Report {
  id: number;
  email: string;
  ammount: string;
  pet: Pet
}