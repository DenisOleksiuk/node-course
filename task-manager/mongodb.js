const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log("Error => ", error);
    }

    const db = client.db(databaseName);

    // db.collection("users").insertOne(
    //   {
    //     name: "My first name",
    //     age: 26,
    //   },
    //   (err, result) => {
    //     if (err) {
    //       console.log("Unable to insert user");
    //     }

    //     console.log(result);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Jen",
    //       age: 28,
    //     },
    //     {
    //       name: "Gunther",
    //       age: 27,
    //     },
    //   ],
    //   (err, result) => {
    //     if (err) {
    //       return console.log("Unable to insert document!");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    db.collection("tasks").insertMany(
      [
        {
          description: "Do jobs",
          completed: false,
        },
        {
          description: "Learn English",
          completed: false,
        },
        {
          description: "Learn Nodejs",
          completed: true,
        },
      ],
      (err, result) => {
        if (err) {
          return console.log("Unable to insert document");
        }

        console.log(result.ops);
      }
    );
  }
);
