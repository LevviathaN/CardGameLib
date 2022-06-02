function PrihodActions() {
    this.targets = [];


    this.selectTargets = function(card) {
        let targetDescript = card.getStat("target");
        if (targetDescript.includes("лівий")) {
            this.targets.push(gameManager.getPlayerBy("left", 1));
        } else if (targetDescript.includes("правий")) {
            this.targets.push(gameManager.getPlayerBy("right", 1));
        } else if (targetDescript.includes("найживучіший")) {
            this.targets = gameManager.getPlayersByStat("health", "highest", 1);
        } else if (targetDescript.includes("найбільш чахлий")) {
            this.targets = gameManager.getPlayersByStat("health", "lowest", 1);
        } else if (targetDescript.includes("з замком")) {
            this.targets = gameManager.getPlayersByStat("castle", "equals", "true");
        } else if (targetDescript.includes("без замку")) {
            this.targets = gameManager.getPlayersByStat("castle", "equals", "false");
        } else if (targetDescript.includes("найбільше скарбів")) {
            this.targets = gameManager.getPlayersByStat("treasures", "highest", 1);
        } else if (targetDescript.includes("найбільше крові")) {
            this.targets = gameManager.getPlayersByStat("blood", "highest", 1);
        } else if (targetDescript.includes("найбільше тварюк")) {
            this.targets = gameManager.getPlayersByStat("numberOfCreaturesInGame", "highest", 1);
        } else if (targetDescript.includes("що вже походив")) {
            this.targets.push(gameManager.getPlayerBy("turned", true));
        } else if (targetDescript.includes("за твоїм вибором")) {
            this.targets.push(gameManager.selectPlayer());
        }
    }
}
const prihodActions = new PrihodActions();