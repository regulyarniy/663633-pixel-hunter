import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {MemoryRouter} from "react-router-dom";

describe(`App component`, () => {
  const mockProps = {
    getQuestions: jest.fn(),
    questions: []
  };

  it(`renders without crashing`, () => {
    const div = document.createElement(`div`);
    ReactDOM.render(<MemoryRouter><App {...mockProps}/></MemoryRouter>, div);
  });
});
