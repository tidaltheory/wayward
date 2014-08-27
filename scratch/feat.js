/**
 * Feat object
 */
{
  "id": 20,
  "name": "Elemental Fist",
  "type": "Combat", // Normal, Combat, Metamagic, Teamwork
  "prerequisites": [
    {
      "thing": "stat",
      "stat": "constitution",
      "amount": 13
    },
    {
      "thing": "stat",
      "stat": "wisdom",
      "amount": 13
    },
    {
      "thing": "feat",
      "feat": "Improved Unarmed Strike",
      "feat_id": 9
    },
    {
      "thing": "",
      "": "Base Attack Bonus",
      "amount": 8
    }
  ],
  "benefits": [
    {
      "benefit": "damage",
      "attack_type": "Unarmed Strike",
      "damage_dice": "1d6",
      "damage_type": "energy"
    }
  ]
}
