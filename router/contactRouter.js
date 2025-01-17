const express = require('express');
const router = express.Router();
const {
    getContacts,
    createContacts,
    getContact,
    updateContact,
    deleteContact,
} = require("../controllers/contactController");

//Root path
router.route("/")
//Get all contacts
.get(getContacts)
//Create contacts 
.post(createContacts);

//Route parameter /:id
router.route("/:id")
.get(getContact)
//Update contacts by ID
.put(updateContact)
//Delete contacts by ID
.delete(deleteContact);

module.exports = router;