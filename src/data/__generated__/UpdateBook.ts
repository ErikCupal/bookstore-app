/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateBook
// ====================================================

export interface UpdateBook_editBook {
  __typename: "Book";
  id: number;
  title: string;
  author: string;
  price: number;
}

export interface UpdateBook {
  editBook: UpdateBook_editBook | null;
}

export interface UpdateBookVariables {
  id: number;
  title: string;
  author: string;
  price: number;
}
