class Key {
    private signature: number = Math.random()
    getSignature() {
        return this.signature
    }
}

class Person {
    constructor(private key: Key) { }
    getKey(): Key  {
        return this.key
    }
}

abstract class House {
    protected tenants: Person[] = []
    protected door: boolean;
    protected key: Key;

    constructor(key: Key) {
        this.door = false;
        this.key = key;
      }

    comeIn(person: Person){
        if(this.door) {
         this.tenants.push(person)
         console.log(`Welcome home, ${person.getKey().getSignature()}!`);
        } else {
            console.log("The door is closed.");
          }
    }
    abstract openDoor(key: Key): void
}

class MyHouse extends House{
    openDoor(key: Key): void{
      if (key.getSignature() === this.key.getSignature()) {
         this.door = true
         console.log("Door opened.");
      } else {
        console.log("Invalid key.");
      }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export { };