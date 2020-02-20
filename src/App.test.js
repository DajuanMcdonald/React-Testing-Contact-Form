import React from "react";
import { render, fireEvent, cleanup  } from "@testing-library/react";
import App from "./App";
import 'mutationobserver-shim';
import ContactForm from "./components/ContactForm";
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";


test("renders App without crashing", () => {
  render(<App />);
});

test("renders ContactForm without crashing", () => {
  //Arrange
 render(<ContactForm/>);

});

test('name field accepts a max of 3 characters', () => {
//  Arrange
  const {getByRole } = render (<input/>);

  // Act

//  Assert
});
