import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react'; // Import act from react
import '@testing-library/jest-dom'
import App from '../App';

describe('App Component', () => {
  test('renders app title', () => {
    render(<App />);
    expect(screen.getByText('Task Manager')).toBeInTheDocument();
  });

  test('can add a new task', async () => {
    render(<App />);
    const input = screen.getByTestId('task-input');
    const form = screen.getByTestId('task-form');

    await act(async () => {
      fireEvent.change(input, { target: { value: 'New Task' } });
      fireEvent.submit(form);
    });

    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  test('can toggle task completion', async () => {
    render(<App />);
    const input = screen.getByTestId('task-input');
    const form = screen.getByTestId('task-form');

    await act(async () => {
      fireEvent.change(input, { target: { value: 'Test Task' } });
      fireEvent.submit(form);
    });

    const checkbox = screen.getByRole('checkbox');

    await act(async () => {
      fireEvent.click(checkbox);
    });

    expect(checkbox.checked).toBe(true);
  });

  test('can delete a task', async () => {
    render(<App />);
    const input = screen.getByTestId('task-input');
    const form = screen.getByTestId('task-form');

    await act(async () => {
      fireEvent.change(input, { target: { value: 'Task to Delete' } });
      fireEvent.submit(form);
    });

    const deleteButton = screen.getByText('Delete');

    await act(async () => {
      fireEvent.click(deleteButton);
    });

    expect(screen.queryByText('Task to Delete')).not.toBeInTheDocument();
  });
});
