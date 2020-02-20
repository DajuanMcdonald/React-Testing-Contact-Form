import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from "./ContactForm";

const contactForm = require('./ContactForm');
test('renders without error', () => {
   const { getByText } = render(<ContactForm/>);
});