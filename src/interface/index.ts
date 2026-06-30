export type Program = "kids" | "adults";

export interface FormState {
  name: string;
  phone: string;
  program: Program;
  slot: string;
  date: Date | undefined;
  notes: string;
}