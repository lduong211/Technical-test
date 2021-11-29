import { render, screen } from '@testing-library/react';
import App from './App';
import HRAndAdmin from './components/HomePage/HRAndAdmin';

test('renders learn react link', () => {
  const {container, getByText} = render(<HRAndAdmin />);
  expect(container.appendChild()).toMatchInlineSnapshot(`<h3>HR & ADMIN</h3>`)
});
