import MatchReader from './MatchReader';
import Summary from './Summary';

const matchReader = MatchReader.fromCsv('football');
matchReader.load();


const manUnitedSummary = Summary.winsAlanysisWithConsoleReport('Brighton');

manUnitedSummary.buildAndPrintReport(matchReader.matches);