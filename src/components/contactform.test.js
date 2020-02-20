import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';
import ContactForm from "./ContactForm";
import 'mutationobserver-shim';

const contactForm = require('./ContactForm');
test('renders without error', () => {
   //Arrange
   const { getByText } = render(<ContactForm/>);

//   Act

//   Assert


});