let gameObject = () => {
  let teamDetails = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["black", "white"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["turquoise", "purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
  return teamDetails;
};

// console.log(gameObject());

function numPointsScored(playerName) {
  let game = gameObject();
  for (let gameKey in game) {
    let team = game[gameKey];
    for (let teamDetails in team) {
      let details = team[teamDetails];
      for (let player in details) {
        if (player === playerName) {
          return details[player]["points"];
        }
      }
    }
  }
}

// console.log(numPointsScored("Alan Anderson"));

function shoeSize(playerName) {
  let game = gameObject();
  for (let gameKey in game) {
    let team = game[gameKey];
    for (let teamDetails in team) {
      let details = team[teamDetails];
      for (let player in details) {
        if (player === playerName) {
          return details[player]["shoe"];
        }
      }
    }
  }
}

// console.log(shoeSize("Alan Anderson"));

function teamColors(teamID) {
  let game = gameObject();
  for (let gameKey in game) {
    if (gameKey === teamID) {
      return game[teamID]["colors"];
    }
  }
}

// console.log(teamColors("away"));

function teamNames(teamID) {
  let game = gameObject();
  for (let gameKey in game) {
    let team = game[gameKey];
    if (gameKey === teamID) {
      return Object.keys(team["players"]);
    }
  }
}

// console.log(teamNames("away"));

function playerNumbers(teamID) {
  let game = gameObject();
  let numbers = [];
  for (let gameKey in game) {
    let team = game[gameKey];
    if (gameKey === teamID) {
      let playerInfo = Object.values(team["players"]);
      for (playerNum in playerInfo) {
        numbers.push(playerInfo[playerNum]["number"]);
      }
      return numbers;
    }
  }
}

// console.log(playerNumbers("home"));

function playerStats(playerName) {
  let game = gameObject();
  for (let gameKey in game) {
    let team = game[gameKey];
    for (teamDetails in team) {
      let details = team[teamDetails];
      for (let player in details) {
        if (player === playerName) {
          return details[player];
        }
      }
    }
  }
}

console.log(playerStats("Brook Lopez"));
