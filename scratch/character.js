/**
 * Character object.
 */
{
  "_id": 20,
  "character_name": "Name",
  "type": "PC",
  "gender": "Male",
  "age": 30,
  "height": "",
  "weight": 135,
  "appearance": {
    "hair": "",
    "eyes": "",
    "skin": ""
  },

  "stat_rules": "Point Buy (High Fantasy)",

  "base_stats": {
    "strength": 15,
    "dexterity": 15,
    "constitution": 15,
    "intelligence": 15,
    "wisdom": 15,
    "charisma": 15,
    "hit_points": 20
  },
  "current_stats": {
    "strength": 15,
    "dexterity": 15,
    "constitution": 15,
    "intelligence": 15,
    "wisdom": 15,
    "charisma": 15,
    "hit_points": 20
  },

  "race": {
    "id": 1,
    "name": "Dwarf",
    "type": "humanoid",
    "size": "medium",
    "speed": 20,
    "stat_mods": [
      {
        "stat": "constitution",
        "modifier": "up",
        "amount": 2
      },
      {
        "stat": "wisdom",
        "modifier": "up",
        "amount": 2
      },
      {
        "stat": "charisma",
        "modifier": "down",
        "amount": 2
      },
    ],
    /**
     * Selected languages
     *
     * `Race` object will list all available languages, here we only need
     * what the player has chosen.
     */
    "languages": [
      {
        "language": "Common",
        "automatic": true
      },
      {
        "language": "Dwarven",
        "automatic": true
      },
      {
        "language": "Goblin",
        "automatic": false
      }
    ],
    "abilities": [],

  },

  "alignment": "chaotic good",
  "deity": "",
  "faction": "",

  "levels": [
    {
      "class": "Ranger",
      "archetype": "",
      "hit_dice": "d10",
      "skill_points": 0,
      "hp_bonus": 10,
      "level_bonus": {
        "bonus_type": "hp",
        "amount": 1
      },

    }
  ],

  "feats": [
    {

    }
  ],

  "flaws": [],

  "traits": [],

  "drawbacks": [],

  "skill_points": 0,
  "skills": [
    {
      "skill": "",
      "class_skill": true,
      "stat_mod": "dexterity",
      "racial_mod": 0,
      "ranks": 1
    }
  ],

  "equipment": {
    "weapons": [
      {
        "name": "Whispering Shrike",
        "class": "Light",
        "category": "Melee",
        "attack_bonus": 7,
        "damage_dice": "1d6",
        "damage_type": "P/S",
        "critical": {
          "roll": [
            18,
            19,
            20
          ],
          "multiplier": 2
        },
        "weight": 2,
        "traits": {

        },
        "flaws": {

        },
        "aura": "",
        "slot": "",
        "equipped": true
      }
    ],
    "armour": [
      {
        "name": "",
        "class": "Medium",
        "damage_reduction": 5,
        "max_dex_bonus": 4,
        "ac_penalty": 4,
        "spell_failure_chance": 25,
        "weight": 30,
        "slot": "",
        "equipped": true
      }
    ],
    "magic_items": [
      {
        "name": "",
        "category": "",
        "aura": "Faint Conjuration"
        "ability": [
          {
            "spell": "Cure Light wounds",
            "spell_id": 90,
            "charges": 1
          }
        ],
        "stackable": true
      }
    ],
    "gear": [
      {
        "name": "",
        "category": "",
        "weight": 5,
        "carried": true
      }
    ]
  }
}
