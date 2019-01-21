export class Pkmn{
    name: string;
    type: string[];
    trainer: string;
    gender: string;
    owned: string;
    constructor(name: string, type: string[], trainer: string, gender: string, owned: string) {
        this.name = name;
        this.type = type;
        this.trainer = trainer;
        this.gender = gender;
        this.owned = owned;
    }
}