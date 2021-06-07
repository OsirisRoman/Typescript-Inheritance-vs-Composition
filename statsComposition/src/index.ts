import { MatchReader } from "./MatchReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";

//This is like a "default" prebuild csvReader
const footballReader = MatchReader.fromcsv("football.csv");

//We can use any previous built analyzer an report builder
const manUnitedConsoleSummary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);

//In this case this is a kind of "default" prebuild analysis-report
const manUnitedHtmlSummary = Summary.winsAnalysisWithHtmlReport(
  "Man United",
  "ManUnited.html"
);

footballReader.load();

manUnitedConsoleSummary.buildAndPrintReport(footballReader.matches);
manUnitedHtmlSummary.buildAndPrintReport(footballReader.matches);
