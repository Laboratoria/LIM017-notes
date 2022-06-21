import React from 'react'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import {Login} from '../../../components/Login/Login';

jest.mock("../../../context/authContext.js")
test('renders YUYARINAPAQ', () => {
    render(<Login />);
    const linkElement = screen.getByText(/YUYARINAPAQ/i);
    expect(linkElement).toBeInTheDocument();
  });