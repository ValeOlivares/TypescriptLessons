const carMakers= ['ford', 'toyota', 'chevy'];
const dates = [ new Date(), new Date()];

const carsByMake : string[][]= [];

// Help with interence when extracting values

const firstCar = carMakers[0];
const myCar = carMakers.pop();

//help with 'map'
carMakers.map((car: string): string => {
  return car.toLowerCase();
});

//Flexible types
const importantDates: (Date | string)[]= [ new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());