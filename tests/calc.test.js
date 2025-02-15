// tests/scoreCalculator.test.js
const ScoreCalculator = require('../src/scoreCalculator');

describe('ScoreCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new ScoreCalculator();
  });

  describe('calculateIELTSBandScore', () => {
    test('calculates correct average band score', () => {
      expect(calculator.calculateIELTSBandScore(6.5, 7.0, 6.5, 7.0)).toBe(7.0);
    });

    test('rounds to nearest 0.5', () => {
      expect(calculator.calculateIELTSBandScore(6.7, 6.8, 6.7, 6.8)).toBe(7.0);
    });

    test('throws error for invalid scores', () => {
      expect(() => {
        calculator.calculateIELTSBandScore(10, 7, 6, 7);
      }).toThrow('Scores must be between 0 and 9');
    });
  });

  describe('getStudyRecommendation', () => {
    test('provides appropriate recommendations', () => {
      expect(calculator.getStudyRecommendation(7.5)).toContain('Ready for most universities');
      expect(calculator.getStudyRecommendation(6.5)).toContain('Good score');
      expect(calculator.getStudyRecommendation(5.5)).toContain('More practice needed');
    });
  });
});