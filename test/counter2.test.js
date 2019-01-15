import { mount } from '@vue/test-utils'
import Counter from '../src/counter'
describe('计数器', () => {
  const wrapper = mount(Counter)
  it('渲染正确的标记', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })
  it('是一个按钮', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
})