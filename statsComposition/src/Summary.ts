import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analizer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  //We can build a Summary with any previous built analyzer an report builder
  //It is just required to satify the interface constraint
  constructor(public analyzer: Analizer, public outputTarget: OutputTarget) {}

  //preconfigured analysis - report
  static winsAnalysisWithHtmlReport(teamName: string, fileName: string) {
    return new Summary(new WinsAnalysis(teamName), new HtmlReport(fileName));
  }

  buildAndPrintReport(matches: MatchData[]) {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
