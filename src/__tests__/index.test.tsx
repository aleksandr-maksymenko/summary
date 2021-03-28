import React from 'react'
import { shallow } from 'enzyme'
import Index from 'src/pages/oleksandr_maksymenko'

describe('Index pages', () => {
  it('Should return Index pages', () => {
    const wrapper = shallow(<Index />)
    expect(wrapper).toMatchSnapshot()
  })
})
