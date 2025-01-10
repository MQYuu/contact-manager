const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let contacts = [
    {id: 1, name: 'John Doe', email: 'John@gmail.com'},
    {id: 2, name: 'Yuu', email: 'Yuu@gmail.com'},
];

app.get('/', (req, res) => {
    res.send('Contact Manager Project');
});

//get all contacts
app.get('/api/contacts', (req, res) => {
    res.json(contacts);
});

//Create a new contact
app.post('/api/contacts', (req, res) => {
    if(!req.body.name || !req.body.email) {
        return res.status(400).json({message: 'Name and email are required'});
    }

    const newContact = {
        id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1,
        name: req.body.name,
        email: req.body.email,
    };

    contacts.push(newContact);
    res.status(201).json(newContact);
});

//Get a contact by ID
app.get('/api/contacts/:id', (req, res) =>{
    const contact = contacts.find((c) => c.id === parseInt(req.params.id));
    if(!contact) {
        return res.status(404).json({message: 'Contact not found'});
    }
    res.json(contact);
});

//update a contact by ID
app.put('/api/contacts/:id', (req, res) =>{
    const contact = contacts.find((c) => c.id === parseInt(req.params.id));
    if(!contact) {
        return res.status(404).json({message: 'Contact not found'});
    }

    if(!req.body.name || !req.body.email) {
        return res.status(400).json({message: 'Name and email are required to update'});
    }

    // Update contact
    contact.name = req.body.name;
    contact.email= req.body.email;
    res.json(contact);
});

//Delete a contact by ID
app.delete('/api/contacts/:id',(req, res) =>{
    const contactIndex = contacts.findIndex((c) => c.id === parseInt(req.params.id));
    if(contactIndex === -1) {
        return res.status(404).json({message: 'Contact not found'});
    }
    //Delete contact
    const deleteContact = contacts.splice(contactIndex, 1);
    res.json({message: 'Contact deleted successfully', contact: deleteContact[0]});
});

app.use((req, res) => {
    res.status(404).json({message: 'Route not found'});
});

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
});