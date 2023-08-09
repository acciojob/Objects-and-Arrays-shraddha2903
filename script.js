const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
const team =players;
let team1 =[];
var i=0;
for(let val :players)
	{
		team1[i]=val;
	    i++;
	}

let cap1 =person;

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
