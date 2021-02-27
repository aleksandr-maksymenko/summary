import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import InfoBlock from './index'

describe('About', () => {
  let wrapper: ShallowWrapper

  beforeAll(() => {
    wrapper = shallow(<InfoBlock />)
  })

  it('Should return section', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
