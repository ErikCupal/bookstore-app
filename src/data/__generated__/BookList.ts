/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BookList
// ====================================================

export interface BookList_books {
  __typename: "Book";
  id: number;
  title: string;
  author: string;
  price: number;
}

export interface BookList {
  books: BookList_books[] | null;
}
