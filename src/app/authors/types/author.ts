export interface Author {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly totalBooks: number;
}

export type AuthorCreateRequest = Pick<Author, 'firstName' | 'lastName'>;
