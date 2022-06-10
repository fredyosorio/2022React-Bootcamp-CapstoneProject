import { render, screen } from '@testing-library/react';
import Header from '../components/header/header';

describe('Logo', () => {
  test('Logo must have src = "logo.svg" and alt = "logo"', () => {
    render(<Header/>);
    const logo = screen.getByAltText('logo');
    expect(logo).toHaveAttribute('src', 'logo.svg');
    expect(logo).toHaveAttribute('alt', 'logo');
  });
});