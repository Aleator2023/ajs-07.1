import { Validator } from '../src/index.js';

describe('validateUsername', () => {
    const validator = new Validator();
  
    test('valid usernames', () => {
      expect(validator.validateUsername('Name')).toBeTruthy();     
      expect(validator.validateUsername('1Name123')).toBeFalsy(); // начинается с цифры
      expect(validator.validateUsername('_Name')).toBeFalsy(); // начинается с подчеркивания
      expect(validator.validateUsername('Name123_')).toBeFalsy(); // заканчивается на подчеркивание
      expect(validator.validateUsername('Name-')).toBeFalsy(); // заканчивается на тире
      expect(validator.validateUsername('Na--me')).toBeTruthy();
      expect(validator.validateUsername('1234')).toBeFalsy(); // только цифры
      expect(validator.validateUsername('Name1234')).toBeFalsy(); // подряд 4 цифры
      expect(validator.validateUsername('Na123me')).toBeTruthy();
    });
  });
  