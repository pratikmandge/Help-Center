import express from 'express';
import Card from '../models/Card.js';

const router = express.Router();

router.post('/cards', async (req, res) => {
    try {
        const { id, title, description } = req.body;
        const card = new Card({ id, title, description, link });
        await card.save();
        res.status(201).json(card);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/cards', async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/cards/:title', async (req, res) => {
    try {
        const card = await Card.findOne({ title: req.params.title });
        if (!card) {
            return res.status(404).json({ error: 'Card not found' });
        }
        res.status(200).json(card);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
