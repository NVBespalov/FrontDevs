import React from 'react'
import CatalogCategory from './CatalogCategory'

it('should render a catalog category', () => {
  const wrapper = shallow(<CatalogCategory />)
  expect(wrapper).toMatchSnapshot()
})

it('should render a catalog category', () => {
  const wrapper = mount(
    <CatalogCategory
      categoryType='MEN'
      categoryItems={[]}
      labelRight={false}
    />)
  expect(wrapper.find('.components-CategoryTitle-_title').length).toBe(1)
})
