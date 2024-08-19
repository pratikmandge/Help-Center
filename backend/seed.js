import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Card from './models/Card.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(async () => {
        console.log('MongoDB connected');

        const cards = [
            {
                id: '1',
                title: 'Branches',
                description: 'Abstract Branches lets you manage, version, and document your designs in one place.',
                link: '/branches'
            },
            {
                id: '2',
                title: 'Manage Your Account',
                description: 'Configure your account settings, such as your email, profile, details, and password.',
                link: '/manage-account'
            },
            {
                id: '3',
                title: 'Manage organizations, teams, and projects',
                description: 'Use Abstract organizations, teams, and projects to organize your people and your work.',
                link: '/manage'
            },
            {
                id: '4',
                title: 'Manage billing',
                description: 'Change subscriptions and payment details.',
                link: '/manage-billing'
            },
            {
                id: '5',
                title: 'Authenticate to Abstract',
                description: 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.',
                link: '/authention-setup'
            },
            {
                id: '6',
                title: 'Abstract Support',
                description: 'Get in touch with a human.',
                link: '/support'
            }
        ];

        await Card.insertMany(cards);
        console.log('Cards added to the database');

        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });
