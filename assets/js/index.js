//task1
function percentage(number,total)
{

        return per=(number/100)*total;
}
console.log(percentage(5,60));
//task2
const persons=[
	{
		id: 1,
		personName: "Fahad",
		personAge: "23",
		personIncome: "2000000"
	},
	{
		id: 2,
		personName: "Zoya",
		personAge: "23",
		personIncome: "3000000"
	}
]
function printPerson(person) {
        console.log(`Person ${person.id} name is ${person.personName} having salary ${person.personIncome}`);
      }
      for (const person of persons) {
        printPerson(person);
      }