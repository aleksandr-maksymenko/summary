import React from 'react'
import { shallow } from 'enzyme'
import Index from '../pages'

describe('Index pages', () => {
  it('Should return Index pages', () => {
    const wrapper = shallow(<Index />)
    expect(wrapper).toMatchSnapshot()
  })
})
