const express = require('express');
const router = express.Router();

//Get all contacts
const getContacts = (req, res) => {
    res.status(200).json({msg: 'Get all contacts'})
};

//Create contacts 
const createContacts = (req, res) =>{
    res.status(200).json({msg: 'Create contacts'})
};

//Get contacts by ID
const getContact = (req, res) =>{
    res.status(200).json({msg: 'Get contacts by ID'})
};

//Update contacts by ID
const updateContact = (req, res) =>{
    res.status(200).json({msg: 'Update contacts by ID'})
};

//Delete contacts by ID
const deleteContact = (req, res) =>{
    res.status(200).json({msg: 'Delete contacts by ID'})
};

module.exports = {
    getContacts,
    createContacts,
    getContact,
    updateContact,
    deleteContact,
};