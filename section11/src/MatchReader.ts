import CsvFileReader from './CsvFileReader';
import { DataReader, FootballMatchData, MatchResult } from './types';
import { dateStringToDate } from './utils';

class MatchReader {
  static fromCsv(filename: string) {
    return new MatchReader(
      new CsvFileReader(filename),
    );
  }
  matches: FootballMatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(row => this.mapRow(row));
  }

  mapRow(row: string[]): FootballMatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      Number(row[3]),
      Number(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}

export default MatchReader;
