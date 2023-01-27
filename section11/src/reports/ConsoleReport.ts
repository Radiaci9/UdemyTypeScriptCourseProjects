import { OutputTarget } from '../types';

class ConsoleReport implements OutputTarget {
  constructor() {}

  print(report: string): void {
    console.log(report);
  }
}

export default ConsoleReport;
