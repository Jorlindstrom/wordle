import { wordle } from './wordle.js';

describe('Wordle Algorithm Tests', () => {
  test('Helt korrekt ord', () => {
    expect(wordle('SMART', 'SMART')).toEqual([
      'correct', 'correct', 'correct', 'correct', 'correct'
    ]);
  });

  test('Felaktigt ord, ingen match', () => {
    expect(wordle('PLUTO', 'SMAKA')).toEqual([
      'absent', 'absent', 'absent', 'absent', 'absent'
    ]);
  });

  test('Några korrekta bokstäver på rätt plats', () => {
    expect(wordle('START', 'SMAKA')).toEqual([
      'correct', 'absent', 'correct', 'absent', 'absent'
    ]);
  });

  test('Bokstäver på fel plats', () => {
    expect(wordle('TRAMS', 'SMART')).toEqual([
      'present', 'present', 'correct', 'present', 'present'
    ]);
  });

  test('Blandning av korrekt, present och absent', () => {
    expect(wordle('STORM', 'SMART')).toEqual([
      'correct', 'present', 'absent', 'correct', 'present'
    ]);
  });

  test('Dubbel bokstav i gissning, en i lösningen', () => {
    expect(wordle('APPLE', 'PLANE')).toEqual([
      'present', 'present', 'absent', 'present', 'correct'
    ]);
  });

});
