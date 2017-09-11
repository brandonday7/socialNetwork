var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// FUNCTIONS TO WRITE

// 1 List everyone and for each of them, list the names of who they follow and who follows them
// 2 Identify who follows the most people
// 3 Identify who has the most followers
// 4 Identify who has the most followers over 30
// 5 Identify who follows the most people over 30
// 6 List those who follow someone that doesn't follow them back
// 7* List everyone and their reach (sum of # of followers and # of followers of followers)

//this function appends an array to the data containing who follows who

let addOnLeads = function() {
  let leadArray = [];
  for (member in data)
  {
    let iFollow = data[member].follows;
    for (let i = 0; i < iFollow.length; i++)
    {
      currentPerson = iFollow[i];
      if (!data[currentPerson].leads)
      {
        data[currentPerson].leads = [data[member]];
      }
      else
      {
        data[currentPerson].leads.push(data[member]);
      }

    }

 } //data now contains a "leads" key which contains the members that follow each person

}




//FUNC 1
let func1 = function() {
  addOnLeads();

  for (member in data)
  {
    console.log(data[member].name, " follows: ");
    let iFollow = data[member].follows;
    let followArray = [];
    let leadArray = [];


    for (let i = 0; i < iFollow.length; i++)
    {
        followArray.push(data[iFollow[i]].name);
    }
    console.log(followArray);

    for (let j = 0; j < data[member].leads.length; j++) {
      leadArray.push(data[member].leads[j].name);
    }
    console.log("and is followd by: ", leadArray);
  }
}

//TEST 1
// func1();





//FUNC 2
let func2 = function() {
  let max = 0;
  let followBoss = '';
  for (member in data)
  {
    iFollow = data[member].follows.length;
    if (iFollow >= max)
    {
      max = iFollow;
      followBoss = data[member].name;
    }
  }

  if (followBoss)
  {
    console.log(followBoss, " follows the most people! (", max, " people)");
  }
  else
  {
    console.log("Nobody follows anyone!");
  }
}

//TEST 2
// func2();






//FUNC 3
let func3 = function () {
  addOnLeads();
  let absoluteMax = 0;
  let leader = '';
  for (member in data) {
    let personalMax = data[member].leads.length;
    if (personalMax > absoluteMax) {
      absoluteMax = personalMax;
      leader = data[member].name;
    }
  }

  console.log(leader, " is followed by the most people. (", absoluteMax, " people)");
}


//TEST 3
// func3();




//FUNC 4
let func4 = function() {
  addOnLeads()
  let absoluteMax = 0;
  let memberMax = 0;
  let leadBoss = '';
  for (member in data)
  {
    memberMax = 0;
    for (index in data[member].leads)
    {
      let age = data[member].leads[index].age;
      if (age > 30) {
        memberMax++;
      }
    }
    if (memberMax > absoluteMax) {
      absoluteMax = memberMax;
      leadBoss = data[member].name;

    }
  }
  console.log("The person with the most followers over 30 is ", leadBoss, "(", absoluteMax, " followers)");

}
// func4();



//FUNC 5
let func5 = function () {
  let max = 0;
  let leadBoss = '';
  for (member in data)
  {
    let personalMax = 0;
    let iFollow = data[member].follows;
    for (let i = 0; i < iFollow.length; i++)
    {
      if (data[iFollow[i]].age < 30)
      {
        continue;
      }
      else
      {
        personalMax++;
      }
    }

    if (personalMax > max)
    {
      max = personalMax;
      leadBoss = data[member].name;
    }

  }
    console.log(leadBoss, " follows the most people over 30. (", max, " people)");

}

//TEST FUNC 5
// func5();




//FUNC6

let func6 = function() {
  addOnLeads();
  console.log("The following people follow people that don't follow them back: ");

  for (member in data) {
    let obj = {};
    let iFollow = [];
    let iLead = [];
    for (person in data[member].follows) {
      iFollow.push(data[data[member].follows[person]].name);
    }

  for (follower of data[member].leads) {
    iLead.push(follower.name);
  }

  for (x of iFollow) {
    obj[x] = x;
  }

  for (y of iLead) {
    if (obj[y]) {
      delete obj[y];
    }
  }
  if (Object.keys(obj).length !== 0) {
    console.log(data[member].name);
  }
  }
}

// func6();



//FUNC7

let func7 = function() {
  addOnLeads();
  let reach = 0;
  let innerReach = 0;

  for (member in data) {
    reach = 0;
    innerReach = 0;
    reach += Object.keys(data[member].leads).length;

    for (innerFollower of data[member].leads) {
      innerReach += Object.keys(innerFollower.leads).length;
    }
    console.log(data[member].name, `'s Reach: `,reach+innerReach);
  }
}

// func7();

