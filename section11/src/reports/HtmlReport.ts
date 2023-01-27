import { OutputTarget } from '../types';
import fs from 'fs';

class HtmlReport implements OutputTarget {
  constructor() {}

  print(report: string): void {
    const html = `
      <div>
        <h2>Alanysis Output</h2>
        <div>${report}</div>
      </div>
    `;

    fs.writeFileSync('report.html', html);
  }
}

export default HtmlReport;
