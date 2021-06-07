import { MatchResult } from "../MatchResult";
import { MatchData } from "../MatchData";
import { Analizer } from "../Summary";

export class WinsAnalysis implements Analizer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]) {
    let winsAsHome = 0;
    let winsAsAway = 0;

    for (let row of matches) {
      if (row[1] === this.teamName && row[5] === MatchResult.HomeWin)
        winsAsAway++;
      if (row[2] === this.teamName && row[5] === MatchResult.AwayWin)
        winsAsHome++;
    }

    return `${this.teamName} has won ${winsAsHome} times as Home and ${winsAsAway} times as Away`;
  }
}
