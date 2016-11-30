//Loops City

//I can count 0-100

var count;
for (count = 0; count <= 100; count++) {
  console.log("I can Count " + count);
}

//Noah Arc
var animalCount;
for (animalCount = 5; animalCount <10; animalCount++){
  console.log("animal number " + animalCount);
  console.log("there are " + animalCount + " many animal in Noah Arc");
}

//Hip Hop Array


//Merlin's Battle Weapon
var weaponChest = ['Mace', 'Sorcerer Stone', 'Excelibur'];
var hero = {
  wizard : 'Merlin',
  weapon : weaponChest[2],
  power : 30
}
function MerlinWeapon(x){
  if (hero.weapon == weaponChest[1]) {
    console.log(hero.wizard + " shall slay the dragon with the " + hero.weapon);
  }else{
    hero.weapon = weaponChest[1];
    console.log(hero.wizard + " is ready for war with the " + hero.weapon);
  }
}