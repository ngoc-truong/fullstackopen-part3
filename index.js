const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const Person = require("./models/person");
const cors = require("cors");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('build'));
morgan.token('body', function (req, res) { return JSON.stringify(req.body) });
app.use(morgan(':method :url :status :response-time ms :body'));

// Get info page 
app.get("/info", (request, response) => {
    const currentTime = new Date();
    Person.find( {} ).then(people => {
        response.send(
            `<p>Phonebook has info for ${people.length} people.</p>
             <p>${currentTime}</p>`
            )
    })
})

// Get all persons
app.get("/api/persons", (request, response) => {
    Person.find({}).then(people => {
        response.json(people);
    })
})

// Post new person
app.post("/api/persons", (request, response, next) => {
    const body = request.body;

    if (body.name === undefined) {
        return response.status(400).json({ error: "name missing" });
    };
    if (body.number === undefined) {
        return response.status(400).json( { error: "number missing" });
    };
    // Duplicate name functionality is missing

    const person = new Person({
        name: body.name, 
        number: body.number,
    });

    person.save().then(savedPerson => {
        response.json(savedPerson);
    })
    .catch (error => next(error));
})

// Get a single person
app.get("/api/persons/:id", (request, response, next) => {
    Person.findById(request.params.id)
        .then(person => {
            if (person) {
                response.json(person);
            } else {
                response.status(404).end();
            };
        })
        .catch(error => next(error));
});

// Delete a specific person
app.delete("/api/persons/:id", (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error));
})

// Update a specific person
app.put("/api/persons/:id", (request, response, next) => {
    const body = request.body;

    const person = {
        name: body.name, 
        number: body.number,
    }

    Person.findByIdAndUpdate(request.params.id, person, { new: true })
        .then(updatedPerson => {
            response.json(updatedPerson);
        })
        .catch(error => next(error));
})

const errorHandler = (error, request, response, next) => {
    console.error("Error: " + error.message);

    if (error.name === "CastError"){
        return response.status(400).send({error: "malformatted id" });
    } else if (error.name === "ValidationError") {
        return response.status(400).send({error: error.message});
    }

    next(error);
}
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

