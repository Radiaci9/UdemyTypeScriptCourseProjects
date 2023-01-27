import { match } from 'assert';
import { Analyzer, FootballMatchData, MatchResult } from '../types';

class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: FootballMatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if ((match[1] === this.team && match[5] === MatchResult.HOME_WIN) || (match[2] === this.team && match[5] === MatchResult.AWAY_WIN)) {
        wins++;
      }
    }
    
    return `The ${this.team} won ${wins} games`;
  }
}

export default WinsAnalysis;
