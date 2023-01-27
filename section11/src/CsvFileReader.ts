import fs from 'fs';
import { DataReader } from './types';

class CsvFileReader implements DataReader {
  data: string[][] = [];

  constructor(private fileName: string) {}

  read(): void {
    this.data = fs.readFileSync(`${this.fileName}.csv`, {
      encoding: 'utf-8',
    })
    .split('\n')
    .map((match): string[] => match.split(','));
  }
}

export default CsvFileReader;
