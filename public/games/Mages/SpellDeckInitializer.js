function SpellDeckInitializer() {
    this.prihodCardsJsonPath = "http://localhost:3000/games/Mages/spellDeckStringStats.json";
    
    this.play = function(card) {
        prihodActions.selectTargets(card);
        console.log("Targets for card: " + card.name);
        for (let i = 0; i < prihodActions.targets.length; i++) {
            console.log(prihodActions.targets[i].name);
        }
    }
}
const spellDeckInitializer = new SpellDeckInitializer();