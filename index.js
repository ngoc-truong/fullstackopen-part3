const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

app.use(express.json());
morgan.token('body', function (req, res) { return JSON.stringify(req.body) });
app.use(morgan(':method :url :status :response-time ms :body'));
app.use(cors());

let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    { 
        name: "Ada Lovelace",
        number: "39-44-4123341",
        id: 2
    },
    {
        name: "Dan Abramov",
        number: "3123-123-23",
        id: 3
    }, 
    {
        name: "Mary Poppendieck",
        number: "39-23-312322",
        id: 4
    }
]

// Info 
app.get("/info", (req, res) => {
    const currentTime = new Date();
    res.send(
        `<p>Phonebook has info for ${persons.length} people.</p>
         <p>${currentTime}</p>`
        )
})

// Get all persons
app.get("/api/persons", (req, res) => {
    res.json(persons);
})

// Get specific person
app.get("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id);
    const person = persons.find(person => person.id === id);

    if(person) {
        res.json(person);
    } else {
        res.status(404).end();
    }
})

// Delete a specific person
app.delete("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id);
    persons = persons.filter(person => person.id !== id);

    Response.status(204).end();
})

// Adding new person
const generateId = () => {
    return Math.floor(Math.random() * Math.floor(100000));
}

app.post("/api/persons", (req, res) => {
    const body = req.body;

    if (!body.name) {
        return res.status(400).json({
            error: "name missing"
        })
    } else if (!body.number) {
        return res.status(400).json({
            error: "number missing"
        })
    } else if (persons.some((person) => person.name === body.name)){
        return res.status(400).json({
            error: "name must be unique" 
        })
    }

    const person = {
        name: body.name, 
        number: body.number, 
        id: generateId(),
    }
    persons = persons.concat(person);
    res.json(person);
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

