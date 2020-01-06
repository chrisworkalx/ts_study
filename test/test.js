/*
 * @Description: 
 * @Version: 2.0
 * @Autor: yaomingfei
 * @Date: 2020-01-06 14:39:28
 * @LastEditors: yaomingfei
 * @LastEditTime: 2020-01-06 14:40:07
 */
'use strict';
const expect = require('chai').expect;
const add = require('../dist/index').add;

describe('ts_study function test', () => {
  it('should return 2', () => {
    const result = add(1, 1);
    expect(result).to.equal(2);
  });
});