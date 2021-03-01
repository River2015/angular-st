export interface ICourse {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  isTopRated: boolean;
  author: IAuthor[];
}

export interface IAuthor {
  id: number;
  name: string;
}

export interface ICourseId {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  isTopRated: boolean;
  authors: IAuthorId[];
}

export interface IAuthorId {
  id: number;
  name: string;
  lastname: string;
}

export interface ICourseEdited {
  id: number;
  name: string;
  date: string;
  length: number;
  author: IAuthor;
  isTopRated: boolean;
}
