import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import axios from 'axios';

import { fetchDataFromAPI } from './helpers/fetchDataFromAPI';

describe('renders without crashing', () => {
	it('shows a welcome message', () => {
		const { getByText } = render(<App />);
		getByText("Women's World Cup");
	});
});

// test('pulls data from api', async () => {
// 	const data = await fetchDataFromAPI('http://localhost:5000/api/players');

// 	console.log(data);
// });

test('clicking the toggle button actually changes class to dark mode', () => {
	const { getByTestId } = render(<App />);
	const darkToggleButton = getByTestId('darkToggleButton');
	expect(darkToggleButton.classList.contains('toggled')).toBe(false);
	fireEvent.click(darkToggleButton);
	expect(darkToggleButton.classList.contains('toggled')).toBe(true);
});
