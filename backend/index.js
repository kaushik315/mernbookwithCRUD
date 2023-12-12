import express, { response } from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from './models/bookModel.js'
import { request } from "http";
import bookRoute from './routes/booksRoute.js'
import cors from 'cors';

const app = express()

app.use(express.json());

app.use(cors());

app.get('/', (request, response) => {
    return response.status(234).send('Welcome')
});

app.use('/books', bookRoute);

mongoose
    .connect(mongoURL)
    .then(() => {
        console.log('App connected to the database');
        app.listen(PORT, () => {
            console.log('App is listening to port : ' + PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    })
