import Character from '../Character';
import Daemon from '../Characters/Daemon';

test('Создание объекта Character', () => {
  expect(() => new Character()).toThrow('Нельзя создать объект класса Character');
});

test('Создание персонажей должно быть без ошибок', () => {
  expect(() => new Daemon()).not.toThrow();
});
