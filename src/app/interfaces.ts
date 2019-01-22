export interface ISurvey {
  id ?: number;
  company_id ?: number;
  status ?: boolean;
  name ?: string;
  category ?: { category: string, status: boolean };
  pages: IPage[]
  _id ?: { $oid: string};
  created_at ?: { $date: number };
  updated_at ?: { $date: number };
  created_by ?: string;
}

export interface IPage {
  title ?: string;
  order ?: number;
  questions ?: IQuestion[]
}

export interface IQuestion {
  question_type ?: { question_type: string, status: boolean };
  order ?: number;
  question ?: string;
  options ?: IOption[] | null
}

export interface IOption {
  order ?: number;
  name ?: string;
  value ?: string;
}

export enum QuestionType {
  singleInput,
  checkbox,
  multipleChoice,
  dropdown,
  comment,
  rating
}
