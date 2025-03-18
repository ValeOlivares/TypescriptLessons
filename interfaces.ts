interface Reportable {
  summary():string;
};

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken:true,
  summary():string {
    return `My car is ${this.name}`
  }
};

const coffee = {
  color: "black",
  carbonated: false,
  sugar: 0,
  summary():string{
    return `My drink is ${this.color}`
  }
};

const printSummary = (item:Reportable): void => {
  console.log("item", item.summary())
};

printSummary(oldCivic);
printSummary(coffee);