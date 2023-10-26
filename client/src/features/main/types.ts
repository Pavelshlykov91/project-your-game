export type Theme = {
  id: number;
  title: string;
  question: Question[];
};

export type Question = {
  id: number;
  theme_id: number;
  content: string;
  answer: string;
  price: number;
};

export type QuestionId = Question['id'];
