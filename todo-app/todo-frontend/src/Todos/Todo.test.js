import { render, screen } from '@testing-library/react'
import Todo from './Todo'

const todo = {
  _id: '64bf8521a5e19ac5ad1a3be3',
  text: 'stop the madness!',
  done: true,
}

describe('tests for <Todo />', () => {
  test('renders content', () => {
    const mockLikesHandler = jest.fn()
    render(
      <Todo
        todo={todo}
        onClickDelete={mockLikesHandler}
        onClickComplete={mockLikesHandler}
      />
    )
    screen.getByText(`${todo.text}`)
    screen.getByText('This todo is done')
  })
})
