import React from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import { mount } from 'enzyme'

it('submit invalid form', () => {
    const onSubmit = jest.fn()
    const wrapper = mount(<SearchBar onSubmit={onSubmit} />)

    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Hello' } })
    input.simulate('submit')

    expect(onSubmit).toHaveBeenCalledTimes(2)
})