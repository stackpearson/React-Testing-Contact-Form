import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm';

test("App renders", () => {
  render(<App />);
});

//contact form renders
test('Conatct Form renders', () => {
  render(<ContactForm />)
})


//test that first name field accepts a name
const setup = () => {
  const utils = render(<ContactForm />)
  const firstNameInput = utils.getByLabelText('first-name')
  const lastNameInput = utils.getByLabelText('last-name')
  const emailAddy = utils.getByLabelText('email-addy')
  const messageInput = utils.getByLabelText('message')

  return {
    firstNameInput,
    lastNameInput,
    emailAddy,
    messageInput,
    ...utils,
  }
}

test('1st name field accepts input', () => {
  const { firstNameInput } = setup()
  fireEvent.change(firstNameInput, { target: { value: 'sawyer' } })
  expect(firstNameInput.value).toBe('sawyer')
})

//test that last name field accepts a name
test('Last name field accepts input', () => {
  const { lastNameInput } = setup()
  fireEvent.change(lastNameInput, { target: { value: 'Pearson' } })
  expect(lastNameInput.value).toBe('Pearson')
})


//test that email field accepts an email
test('email field accepts input', () => {
  const { emailAddy } = setup()
  fireEvent.change(emailAddy, { target: { value: 'sawyer.pearson92@gmail.com' } })
  expect(emailAddy.value).toBe('sawyer.pearson92@gmail.com')
})


//test that message field accepts a message
test('message field accepts input', () => {
  const { messageInput } = setup()
  fireEvent.change(messageInput, { target: { value: 'some text goes here' } })
  expect(messageInput.value).toBe('some text goes here')
})



