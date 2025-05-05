//unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

//isPhoneNumber
test('isPhoneNumber - valid cases', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true); 
});
test('isPhoneNumber - valid cases', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true); 
});

test('isPhoneNumber - invalid cases', () => {
  expect(isPhoneNumber('phone123')).toBe(false); 
});
test('isPhoneNumber - invalid cases', () => {
  expect(isPhoneNumber('1234567890')).toBe(false); 
});

//isEmail
test('isEmail - valid cases', () => {
  expect(isEmail('abc123@abc.co')).toBe(true); 
});
test('isEmail - valid cases', () => {
  expect(isEmail('user@example.com')).toBe(true);
});

test('isEmail - invalid cases', () => {
  expect(isEmail('user@.com')).toBe(false);
});
test('isEmail - invalid cases', () => {
  expect(isEmail('not-an-email')).toBe(false);
});

//isStrongPassword
test('isStrongPassword - valid cases', () => {
  expect(isStrongPassword('a_b1')).toBe(true); 
});
test('isStrongPassword - valid cases', () => {
  expect(isStrongPassword('Abcd123')).toBe(true); 
});

test('isStrongPassword - invalid cases', () => {
  expect(isStrongPassword('a$bc123')).toBe(false); 
});
test('isStrongPassword - invalid cases', () => {
  expect(isStrongPassword('1234abcd')).toBe(false); 
});

//isDate
test('isDate - valid cases', () => {
  expect(isDate('1/1/1999')).toBe(true); 
});
test('isDate - valid cases', () => {
  expect(isDate('12/25/2020')).toBe(true);
});

test('isDate - invalid cases', () => {
  expect(isDate('12/25/20')).toBe(false);  
});
test('isDate - invalid cases', () => {
  expect(isDate('2020-12-25')).toBe(false); 
});

//isHexColor
test('isHexColor - valid cases', () => {
  expect(isHexColor('A1B2C3')).toBe(true); 
});
test('isHexColor - valid cases', () => {
  expect(isHexColor('#FFF')).toBe(true);
});

test('isHexColor - invalid cases', () => {
  expect(isHexColor('ZZZ')).toBe(false); 
});
test('isHexColor - invalid cases', () => {
  expect(isHexColor('#12345')).toBe(false); 
});

