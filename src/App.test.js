import React from "react";
import { render, fireEvent, cleanup  } from "@testing-library/react";
import App from "./App";
import 'mutationobserver-shim';
import ContactForm from "./components/ContactForm";
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';
import {
  findAllByPlaceholderText,
  getAllByAltText,
  getAllByPlaceholderText, getByLabelText,
  getByPlaceholderText,
  getByText, getAllByLabelText
} from "@testing-library/dom";


test("renders App without crashing", () => {
  render(<App />);
});

test("renders ContactForm without crashing", () => {
  //Arrange
 render(<ContactForm/>);

});

test('name field accepts a max of 3 characters', () => {
//  Arrange
  const {getByRole } = render (<App/>);

  // Act

//  Assert
});
