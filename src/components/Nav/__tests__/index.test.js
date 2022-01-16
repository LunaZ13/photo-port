import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
  ]
  const mockCurrentCategory = jest.fn();
  const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    it('renders', () => {
        render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            />);
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        // ASSERT value comparison
        expect(asFragment()).toMatchSnapshot();
    })

    describe('links are available', () => {
        it('inserts text into the links', () => {
            const { getByTestId } = render(<Nav />);
            expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
            expect(getByTestId('about')).toHaveTextContent('About Me');
        })
    })
})