export interface Option {
  id: number;
  name: string;
  alias: string;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
}

export interface Results {
  A: string;
  B: string;
}

export interface Quiz {
  title: string;
  questions: Question[];
  results: Results;
}
