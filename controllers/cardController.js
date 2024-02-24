const Card = require("../models/cardModel");

const getCards = async (req, res) => {
    try {
        const cards = await Card.find({});
        res.json(cards);
    }
    catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: "Server Error" });
    }
}

const getCard = async (req, res) => {
    try {
        const { id } = req.params;
        const card = await Card.findById(id);
        res.json(card);
    }
    catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: "Server Error" });
    }
}

const createCard = async (req, res) => {
    try {
        const { expiration_date, serial_number, security_code } = req.body;
        
        if (!expiration_date) {
            return res.status(400).json({ message: "Expiration date is required" });
        } else if (serial_number.length < 16) {
            return res.status(400).json({ message: "Serial number is not valid" });
        } else if (security_code.length < 3) {
            return res.status(400).json({ message: "Security code must be at least 3 characters" });
        }
        const card = await Card.create({ expiration_date, serial_number, security_code });
        res.json(card);
    }
    catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: "Server Error" });
    }
}

const updateCard = async (req, res) => {
    try {
        const { id } = req.params;
        const { expiration_date, serial_number, security_code } = req.body;
        const card = await Card.findByIdAndUpdate(id, { expiration_date, serial_number, security_code }, { new: true });
        res.json(card);
    }
    catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: "Server Error" });
    }
}

const deleteCard = async (req, res) => {
    try {
        const { id } = req.params;
        await Card.findByIdAndDelete(id);
        res.json({ message: "Card deleted" });
    }
    catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: "Server Error" });
    }
}

module.exports = { getCards, getCard, createCard, updateCard, deleteCard };