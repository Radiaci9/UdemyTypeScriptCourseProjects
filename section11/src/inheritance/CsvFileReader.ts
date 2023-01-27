import fs from 'fs';

abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(private fileName: string) {}

  read(): void {
    this.data = fs.readFileSync(`${this.fileName}.csv`, {
      encoding: 'utf-8',
    })
    .split('\n')
    .map((match): string[] => match.split(','))
    .map(row => this.mapRow(row));
  }
  
  abstract mapRow(row: string[]): T;
}

export default CsvFileReader;
