const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
    },
  ];


  //iterate over that collection and print out everyone's first name
  function firstNamePrinter(collection) {
    for (const user of collection) {
      console.log(user.firstName);
    }
  }
  
  firstNamePrinter(users);

  //print out only users whose favorite color is blue
  function blueFilter(collection) {
    for (const user of collection) {
      if (user.favoriteColor === "Blue") {
        console.log(user.firstName);
      }
    }
  }
  
  blueFilter(users);

  //favorite color is red
  function colorFilter(collection, color) {
    for (const user of collection) {
      if (user.favoriteColor === color) {
        console.log(user.firstName);
      }
    }
  }
  
  colorFilter(users, "Red");

  //favorite animal is a jaguar
  function filter(collection, attribute, value) {
    for (const user of collection) {
      if (user[attribute] === value) {
        console.log(user.firstName);
      }
    }
  }
  
  filter(users, "favoriteAnimal", "Jaguar");

  //filter by 2 attributes
  function filter(collection) {
    for (const user of collection) {
      if (likesElephants(user)) {
        console.log(user.firstName);
      }
    }
  }
  
  function likesElephants(user) {
    return user["favoriteAnimal"] === "Elephant";
  }
  
  filter(users);

  //using filter
  function filter(collection, cb) {
    const newCollection = [];
  
    for (const user of collection) {
      if (cb(user)) {
        newCollection.push(user);
      }
    }
  
    return newCollection;
  }
  
  const bluePenguinUsers = filter(users, function (user) {
    return user.favoriteColor === "Blue" && user.favoriteAnimal === "Penguin";
  });
  
  bluePenguinUsers;
  // => [{ firstName: "Josh", lastName: "Rowley", favoriteColor: "Blue", favoriteAnimal: "Penguin" }, { firstName: "Avidor", lastName: "Turkewitz", favoriteColor: "Blue", favoriteAnimal: "Penguin" }]
  
  const yellowUsers = filter(users, function (user) {
    return user.favoriteColor === "Yellow";
  });
  
  yellowUsers;