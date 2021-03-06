import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import AsideInfo from './index'

const mockedList = [{ text: 'one' }]

const mockedObject = {
  defaultClassName: 'aside-info',
  type: 'link',
  title: '',
  list: mockedList,
}

describe('AsideInfo', () => {
  let wrapper: ShallowWrapper

  beforeAll(() => {
    wrapper = shallow(<AsideInfo {...mockedObject} />)
  })

  it('Should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it(`Should have ${mockedList.length} elements`, () => {
    expect(wrapper.find('li')).toHaveLength(mockedList.length)
  })
})
