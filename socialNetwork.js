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
// 7 List everyone and their reach (sum of # of followers and # of followers of followers)

let whoFollowsWho = function() {
  for (member in data)
  {
    console.log(data[member].name, " follows: ");
    let iFollow = data[member].follows;

    for (let i = 0; i < iFollow.length; i++)
    {
        //ahhhh whaaaaaa
    }
  }
}

//TEST 1
// whoFollowsWho();

let mostFollowers = function() {
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
mostFollowers();










