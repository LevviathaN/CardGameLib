export default class CardActions {
    constructor(scene, name) {
        this.targets = [];
        this.source = 0;

        this.changeStat = function(target, statName, action, amount) {
            let stat = target.getStat(statName);
            switch (action) {
                case "sub":
                    stat = parseInt(stat) - amount;
                    break;
                case "add":
                    stat = parseInt(stat) + amount;
                    break;
                case "set":
                    stat = amount;
                    break;
            }
            target.setStat(statName, stat);
        }

    }
}