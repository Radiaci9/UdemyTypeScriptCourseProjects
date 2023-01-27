import CsvFileReader from './CsvFileReader';
import { FootballMatchData, MatchResult } from '../types';
import { dateStringToDate } from '../utils';

class MatchReader extends CsvFileReader<FootballMatchData> {
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
