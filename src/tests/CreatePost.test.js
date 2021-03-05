import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import CreatePost from '../components/CreatePost/CreatePost'

it('submit valid form', () => {
    const onSubmit = jest.fn()
    render(<CreatePost onSubmit={onSubmit} />)

    fireEvent.change(screen.getByLabelText(/title/i), {
        target: {value: 'test'},
    })
    fireEvent.change(screen.getByLabelText(/body/i), {
        target: {value: 'test'},
    })

    fireEvent.click(screen.getByText(/Publish/i))

    expect(onSubmit).toHaveBeenCalledTimes(1)
})

it('submit invalid form', () => {
    const onSubmit = jest.fn()
    render(<CreatePost onSubmit={onSubmit} />)

    fireEvent.change(screen.getByLabelText(/title/i), {
        target: {value: ''},
    })
    fireEvent.change(screen.getByLabelText(/body/i), {
        target: {value: ''},
    })

    fireEvent.click(screen.getByText(/Publish/i))

    expect(onSubmit).toHaveBeenCalledTimes(0)
})