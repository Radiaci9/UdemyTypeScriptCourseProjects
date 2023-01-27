import CharactersCollection from "./CharactersCollection";
import LinkedList from "./LinkedList";
import NumbersCollection from "./NumbersCollection";
import Sorter from "./Sorter";

const numbersCollection = new NumbersCollection([-5, -255, 33, 424, 5]);

console.log(numbersCollection.data);

numbersCollection.sort();

console.log(numbersCollection.data);


const charactersCollection = new CharactersCollection("sssSqeqwFaaAaF");

console.log(charactersCollection.data);

charactersCollection.sort();

console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(111);
linkedList.add(-55);
linkedList.add(12);
linkedList.add(1);
linkedList.add(-2);
linkedList.add(4);

linkedList.print();

linkedList.sort();

linkedList.print();