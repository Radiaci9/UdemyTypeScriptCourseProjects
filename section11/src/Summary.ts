import WinsAnalysis from './alalyzers/WinsAnalysis';
import ConsoleReport from './reports/ConsoleReport';
import HtmlReport from './reports/HtmlReport';
import { Analyzer, FootballMatchData, OutputTarget } from './types';

class Summary {
  static winsAlanysisWithHtmlReport(team: string) {
    return new Summary(
      new WinsAnalysis(team),
      new HtmlReport(),
    )
  }
  static winsAlanysisWithConsoleReport(team: string) {
    return new Summary(
      new WinsAnalysis(team),
      new ConsoleReport(),
    )
  }
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(mathces: FootballMatchData[]): void {
    const report = this.analyzer.run(mathces);
    this.outputTarget.print(report);
  }
}

export default Summary;
