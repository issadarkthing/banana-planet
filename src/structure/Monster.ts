import { Fighter } from "discordjs-rpg";
import { code, currency, random } from "../utils";
import { Player } from "./Player";
import { Skill } from "./Skill";
import { SideKick } from "./Pet";

export class Monster extends Fighter {
  drop = random.integer(10, 100);
  xpDrop = random.integer(10, 35);
  difficulty: number;
  
  constructor(player: Player) {
    super(random.pick(names));
    this.difficulty = player.level;
    this.attack = player.attack + this.randomAttrib();
    this.hp = player.hp + this.randomAttrib();
    this.armor = player.armor + (this.randomAttrib() / 100);
    this.critChance = player.critChance + (this.randomAttrib() / 100);
    this.critDamage = player.critDamage + random.real(0.01, 0.5);

    if (player.skill && random.bool()) {
      const skill = random.pick(Skill.all);
      skill.setOwner(this);
    }

    if (player.pet && random.bool()) {
      const pet = random.pick(SideKick.all);
      pet.setOwner(this);
    }
  }

  private randomAttrib() {
    return random.integer(5, this.difficulty);
  }

  show(player?: Player) {
    const profile = super.show(player);

    profile.addField(`${currency} Drop`, code(this.drop), true);
    profile.addField("xp Drop", code(this.xpDrop), true);

    return profile;
  }
}


const names = [
  "Liam"       ,
  "Olivia"     ,
  "Noah"       ,
  "Emma"       ,
  "Oliver"     ,
  "Ava"        ,
  "Elijah"     ,
  "Charlotte"  ,
  "William"    ,
  "Sophia"     ,
  "James"      ,
  "Amelia"     ,
  "Benjamin"   ,
  "Isabella"   ,
  "Lucas"      ,
  "Mia"        ,
  "Henry"      ,
  "Evelyn"     ,
  "Alexander"  ,
  "Harper"     ,
  "Mason"      ,
  "Camila"     ,
  "Michael"    ,
  "Gianna"     ,
  "Ethan"      ,
  "Abigail"    ,
  "Daniel"     ,
  "Luna"       ,
  "Jacob"      ,
  "Ella"       ,
  "Logan"      ,
  "Elizabeth"  ,
  "Jackson"    ,
  "Sofia"      ,
  "Levi"       ,
  "Emily"      ,
  "Sebastian"  ,
  "Avery"      ,
  "Mateo"      ,
  "Mila"       ,
  "Jack"       ,
  "Scarlett"   ,
  "Owen"       ,
  "Eleanor"    ,
  "Theodore"   ,
  "Madison"    ,
  "Aiden"      ,
  "Layla"      ,
  "Samuel"     ,
  "Penelope"   ,
  "Joseph"     ,
  "Aria"       ,
  "John"       ,
  "Chloe"      ,
  "David"      ,
  "Grace"      ,
  "Wyatt"      ,
  "Ellie"      ,
  "Matthew"    ,
  "Nora"       ,
  "Luke"       ,
  "Hazel"      ,
  "Asher"      ,
  "Zoey"       ,
  "Carter"     ,
  "Riley"      ,
  "Julian"     ,
  "Victoria"   ,
  "Grayson"    ,
  "Lily"       ,
  "Leo"        ,
  "Aurora"     ,
  "Jayden"     ,
  "Violet"     ,
  "Gabriel"    ,
  "Nova"       ,
  "Isaac"      ,
  "Hannah"     ,
  "Lincoln"    ,
  "Emilia"     ,
  "Anthony"    ,
  "Zoe"        ,
  "Hudson"     ,
  "Stella"     ,
  "Dylan"      ,
  "Everly"     ,
  "Ezra"       ,
  "Isla"       ,
  "Thomas"     ,
  "Leah"       ,
  "Charles"    ,
  "Lillian"    ,
  "Addison"    ,
  "Jaxon"      ,
  "Willow"     ,
  "Maverick"   ,
  "Lucy"       ,
  "Josiah"     ,
  "Paisley"    ,
  "Christopher",
]
