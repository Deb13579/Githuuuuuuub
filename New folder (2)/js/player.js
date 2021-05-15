class Player {
    constructor() {
        this.index = null;
        this.name = null;
        this.score = 0
          // create the property for the score and intialize with zero
    }

    getCount() {
        var playerID = database.ref('playerID');
        playerID.on("value", (data) => {
            playerID = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerID: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
