import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import { mount } from '@vue/test-utils'

import Vue from 'vue'
import Toast from '../../src/toast/toast'

describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.be.ok
  })
  describe('props', done => {
    const Constructor = Vue.extend(Toast)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('可以设置 autoClose.', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          autoClose: 3
        }
      }).$mount(div)
      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })
    it('接受 closeButton 属性', () => {
      const callback = sinon.fake()
      vm = new Constructor({
        propsData: {
          autoClose: false,
          closeButton: {
            text: '关闭',
            callback
          }
        }
      }).$mount()
      let closeElement = vm.$el.querySelector('.am-toast-close')
      expect(closeElement.textContent.trim()).to.eq('关闭')
      closeElement.click()
      expect(callback).to.have.been.called
    })
    it('接受 enableHtml 属性', () => {
      vm = new Constructor({
        propsData: {
          enableHtml: true
        }
      })
      vm.$slots.default = ['<strong id="test">test strong</strong>']
      vm.$mount()
      let strong = vm.$el.querySelector('#test')
      expect(strong).to.exist
    })
    it('接受 position 属性', () => {
      vm = new Constructor({
        propsData: {
          position: 'top'
        }
      }).$mount()
      expect(vm.$el.classList.contains('position-top')).to.eq(true)
    })
    it('可以设置 zIndex.', () => {
      vm = new Constructor({ propsData: { zIndex: 99 } }).$mount()
      expect(vm.$el.style.zIndex).to.eq('99')
    })
  })
})
