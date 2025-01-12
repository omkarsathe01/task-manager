import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import TaskForm from '../components/TaskForm';

describe('TaskForm Component', () => {
  test('calls onAddTask with input value when form is submitted', async () => {
    const mockOnAddTask = jest.fn();
    render(<TaskForm onAddTask={mockOnAddTask} />);

    const input = screen.getByTestId('task-input');

    await act (async () => {
        fireEvent.change(input, { target: { value: 'New Task' } });
        fireEvent.submit(screen.getByTestId('task-form'));
    })

    expect(mockOnAddTask).toHaveBeenCalledWith('New Task');
  });

  test('clears input after form submission', async() => {
    render(<TaskForm onAddTask={() => {}} />);

    const input = screen.getByTestId('task-input');

    await act (async () => {
        fireEvent.change(input, { target: { value: 'New Task' } });
        fireEvent.submit(screen.getByTestId('task-form'));
    })

    expect(input.value).toBe('');
  });
});