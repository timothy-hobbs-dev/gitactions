// src/scoreCalculator.js
class ScoreCalculator {
    calculateIELTSBandScore(listening, reading, writing, speaking) {
      if (!this.isValidScore(listening) || !this.isValidScore(reading) || 
          !this.isValidScore(writing) || !this.isValidScore(speaking)) {
        throw new Error('Scores must be between 0 and 9');
      }
  
      const average = (listening + reading + writing + speaking) / 4;
      return Math.round(average * 2) / 2; // Rounds to nearest 0.5
    }
  
    isValidScore(score) {
      return score >= 0 && score <= 9;
    }
  
    getStudyRecommendation(bandScore) {
      if (bandScore >= 7.5) return "Ready for most universities!";
      if (bandScore >= 6.5) return "Good score! Consider some practice tests.";
      if (bandScore >= 5.5) return "More practice needed - focus on weak areas.";
      return "Intensive study recommended.";
    }
  }
  
  module.exports = ScoreCalculator;