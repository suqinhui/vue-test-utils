import { mount } from '@vue/test-utils'
import Counter from '../src/counter'

describe('计数器', () => {
  const wrapper = mount(Counter)

  it('点击按钮应该使得计数递增', () => {
    expect(wrapper.vm.count).toBe(0)
    //设置count的值为10，再执行点击按钮加1，得到的结果应该是11
    wrapper.setData({ count: 10 })
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(11)
  })
})