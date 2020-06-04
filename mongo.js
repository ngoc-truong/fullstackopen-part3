const mongoose = require("mongoose");

console.log("");
console.log('To see all phonebook entries, use this command: node mongo.js <password>');
console.log('To enter a new phonebook entry, use this command: node mongo.js <password> "<name> <surname>" <phonenumber>');
console.log("");

if (process.argv.length < 3){
    console.log('Please provide the password as an argument: node mongo.js <password> "<name> <surname>" <phonenumber>');
    console.log("");
    process.exit(1);
} 

const password = process.argv[2];
const fullname = process.argv[3];
const number = process.argv[4];

const url = `mongodb+srv://fullstack:${password}@cluster0-k4mnn.mongodb.net/phonebook-app?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
    name: String, 
    number: String,
});

const Person = mongoose.model("Person", personSchema);

if (process.argv.length === 3) {
    // Show all people
    // If you want to find a person with a certain name, you can write: Person.find( {name: "Ngoc"} ).then(result => {...})
    Person
        .find({})
        .then(result => {
            result.forEach( person => {
                console.log(person);
            });
            mongoose.connection.close();
        });
} else if (process.argv.length === 5) {
    // User enters node mongo.js <password> "<name> <surname>" <phonenumber>
    // Save entered entry into database
    const person = new Person({
        name: fullname, 
        number: number, 
    });

    person.save().then(result => {
        console.log(`Added ${result.name} number ${result.number} to phonebook`);
        mongoose.connection.close();
    })
} else {
    console.log('To see all phonebook entries, use this command: node mongo.js <password>');
    console.log('To enter a new phonebook entry, use this command: node mongo.js <password> "<name> <surname>" <phonenumber>');
    console.log('---');
    mongoose.connection.close();
}



