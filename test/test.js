/*
 * @Description: 
 * @Version: 2.0
 * @Autor: yaomingfei
 * @Date: 2020-01-06 14:39:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-13 17:43:17
 */
'use strict';
const expect = require('chai').expect;
const add = require('../dist/index').add;
console.log(00000)
describe('ts_study function test', () => {
  it('should return 2', () => {
    const result = add(1, 1);
    expect(result).to.equal(2);
  });
});