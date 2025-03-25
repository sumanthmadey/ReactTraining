import Button from '@/Components/Button';
const { render, screen } = require('@testing-library/react');

describe('Button Component', () => {
    it('should render the button with the correct label', () => {
        render(<Button buttonName="Click me" onClick={() => { }} />);
        const buttonElement = screen.getByText('Click me');
        expect(buttonElement).toBeInTheDocument();
    });



});