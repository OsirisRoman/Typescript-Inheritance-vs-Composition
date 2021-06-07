import { MatchReader } from "./MatchReader";
import { MatchResults } from "./MatchResults";
import { MatchData } from "./MatchData";

const howManyWins = (data: MatchData[], teamName: string): string => {
  let winsAsHome = 0;
  let winsAsAway = 0;

  for (let row of data) {
    if (row[1] === teamName && row[5] === MatchResults.HomeWin) winsAsAway++;
    if (row[2] === teamName && row[5] === MatchResults.AwayWin) winsAsHome++;
  }

  return `${teamName} has won ${winsAsHome} times as Home and ${winsAsAway} times as Away`;
};

const footballReader = new MatchReader("football.csv");
footballReader.read();

console.log(howManyWins(footballReader.data, "Man United"));
