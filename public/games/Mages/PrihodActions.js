function PrihodActions() {
    this.targets = [];

    this.selectTargets = function(card) {
        let targetDescript = card.getStat("target");
        if (targetDescript.contains("лівий")) {
            this.targets.push(gameManager.getPlayerBy("left", 1));
        } else if (targetDescript.contains("правий")) {
            this.targets.push(gameManager.getPlayerBy("right", 1));
        } else if (targetDescript.contains("найживучіший")) {
            this.targets.push(gameManager.getPlayersByStat("health", "highest", 1));
        } else if (targetDescript.contains("найбільш чахлий")) {
            this.targets.push(gameManager.getPlayersByStat("health", "lowest", 1));
        } else if (targetDescript.contains("з замком")) {
            this.targets.push(gameManager.getPlayersByStat("castle", "equals", "true"));
        } else if (targetDescript.contains("без замку")) {
            this.targets.push(gameManager.getPlayersByStat("castle", "equals", "false"));
        } else if (targetDescript.contains("найбільше скарбів")) {
            this.targets.push(gameManager.getPlayersByStat("treasures", "highest", 1));
        } else if (targetDescript.contains("найбільше крові")) {
            this.targets.push(gameManager.getPlayersByStat("blood", "highest", 1));
        } else if (targetDescript.contains("найбільше тварюк")) {
            this.targets.push(gameManager.getPlayersByStat("numberOfCreaturesInGame", "highest", 1));
        } else if (targetDescript.contains("що вже походив")) {
            this.targets.push(gameManager.getPlayerBy("turned", true));
        } else if (targetDescript.contains("за твоїм вибором")) {
            this.targets.push(gameManager.selectPlayer());
        }
    }
}