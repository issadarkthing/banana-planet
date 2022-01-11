import { oneLine } from "common-tags";
import { Message } from "discord.js";
import { Weapon as BaseWeapon } from "discordjs-rpg";
import { Player } from "../structure/Player";

export abstract class Weapon extends BaseWeapon {
  abstract price: number;
  description = oneLine`Weapon is used to increase player’s attack stat. Max 2
  weapons can be equipped.`;

  static get all(): Weapon[] {
    return [
      new Axe(),
      new Sword(),
      new Dagger(),
      new Mace(),
    ];
  }

  async buy(msg: Message) {

    const player = Player.fromUser(msg.author);

    if (player.coins < this.price) {
      msg.channel.send("Insufficient amount");
      return;
    }

    if (
      player.inventory.some(x => x.id === this.id) ||
      player.equippedWeapons.some(x => x.id === this.id)
    ) {
      msg.channel.send("You already own this item");
      return;
    }

    player.coins -= this.price;
    player.inventory.push(this);

    player.save();
    msg.channel.send(`Successfully bought **${this.name}**`);
  }
}


class Axe extends Weapon {
  id = "axe";
  name = "Lightsaber";
  attack = 20;
  price = 1000;
}

class Sword extends Weapon {
  id = "sword";
  name = "Ape's AR";
  attack = 30;
  price = 2000;
}

class Dagger extends Weapon {
  id = "dagger";
  name = "Banana Bomb";
  attack = 40;
  price = 3000;
}

class Mace extends Weapon {
  id = "mace";
  name = "Infinity Gauntlet";
  attack = 45;
  price = 3500;
}

class Blaster extends Weapon {
  id = "blaster";
  name = "Blaster";
  attack = 50;
  price = 4000;
}
