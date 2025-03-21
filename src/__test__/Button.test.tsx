// src/__tests__/Button.test.tsx
import { render, screen } from '@testing-library/react';
import Button from '@/Components/Button';

describe('Button Component', () => {
    it('should render the button with the correct label', () => {
        render(<Button buttonName="Click me" onClick={() => { }} />);
        const buttonElement = screen.getByText('Click me');
        expect(buttonElement).toBeInTheDocument();
    });


});