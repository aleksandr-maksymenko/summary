import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import About from './index'

describe('About', () => {
  let wrapper: ShallowWrapper

  beforeAll(() => {
    wrapper = shallow(<About />)
  })

  it('Should return section', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
