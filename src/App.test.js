import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm';

test("renders App without crashing", () => {
  render(<App />);
});

//contact form renders
test('renders contact form without crashing', () => {
  render(<ContactForm />)
})


//test that first name field accepts a name
const setup = () => {
  const utils = render(<ContactForm />)
  const firstNameInput = utils.getByLabelText('first-name')
  const lastNameInput = utils.getByLabelText('last-name')
  return {
    firstNameInput,
    lastNameInput,
    ...utils,
  }
}

test('1st name field accepts input', () => {
  const { firstNameInput } = setup()
  fireEvent.change(firstNameInput, { target: { value: 'sawyer' } })
  expect(firstNameInput.value).toBe('sawyer')
})

//test that last name field accepts a name
test('1st name field accepts input', () => {
  const { lastNameInput } = setup()
  fireEvent.change(lastNameInput, { target: { value: 'Pearson' } })
  expect(lastNameInput.value).toBe('Pearson')
})


//test that email field accepts an email



//test that message field accepts a message



//test that submit button functions & reference that all fields match json output
