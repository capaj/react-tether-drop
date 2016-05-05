'use strict'
import test from 'ava'
global.document = {}
import TetherDrop from './index'
import React from 'react'
import { shallow } from 'enzyme'

test('it should call drop', (t) => {
  const wrapper = shallow(<TetherDrop></TetherDrop>)
  wrapper.simulate('hover')

})
