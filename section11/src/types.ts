export enum MatchResult {
  HOME_WIN = 'H',
  AWAY_WIN = 'A',
  DRAW = 'D',
}

export type FootballMatchData = [Date, string, string, number, number, MatchResult, string];

export interface DataReader {
  read(): void;
  data: string[][];
}

export interface Analyzer {
  run(matches: FootballMatchData[]): string;
}

export interface OutputTarget {
  print(report:string): void;
}
