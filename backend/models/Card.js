import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true }
});

const Card = mongoose.model('Card', cardSchema);
export default Card;