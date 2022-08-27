import Character from '../Character';

test('проверка создания объекта класса Character', () => {
  function createCharacter() {
    return new Character(1, 'Bowman');
  }
  expect(createCharacter).toThrowError(new Error('Нельзя создать объект класса Character'));
});

test('проверка создания объектов унаследованного класса', () => {
  function createBowman() {
    class Bowman extends Character {
      constructor(level, type = 'generic') {
        super(level, type);
      }
    }
    return new Bowman(1, 'Bowman');
  }

  const res = {
    attack: 0,
    defence: 0,
    health: 100,
    level: 1,
    type: 'Bowman',
  };
  expect(createBowman()).toEqual(res);
});
