import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import Login from './login.screen';

describe('Login', () => {

  describe('change text login', () => {
    it('change text username and password', () => {
      const { getByTestId } = render(<Login />);

      // use fireEvent change value TextInput
      fireEvent.changeText(getByTestId('username'), 'admin');
      fireEvent.changeText(getByTestId('password'), 'admin@123');

      // use toEqual check value TextInput
      expect(getByTestId('username').props.value).toEqual('admin');
      expect(getByTestId('password').props.value).toEqual('admin@123');
    });

  });
  describe('Submit form login', () => {

    it('on submit login', () => {
      const data = { "password": "123456", "username": "admin@123" }
      const submitHandler = jest.fn();
      const { getByTestId } = render(
        // passing prop to Login component
        <Login login={submitHandler} />

      );
      fireEvent.changeText(getByTestId('username'), 'admin@123');
      fireEvent.changeText(getByTestId('password'), '123456');

      expect(getByTestId('username').props.value).toEqual('admin@123');
      expect(getByTestId('password').props.value).toEqual('123456');

      // use fireEvent.press call Button submit
      fireEvent.press(getByTestId('btnSubmit'));

      // checking ouput data equal input
      expect(submitHandler).toHaveBeenCalledWith(data);
    });

  })

});