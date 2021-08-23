const EVENT = require("../model/eventModel");
const mongoose = require("mongoose");
const axios = require("axios");
const fs = require("fs");

module.exports = {
    addEvent: async (req, res) => {
        const userId = mongoose.Types.ObjectId(req.body.userId);
        const image = `/images/${filename}`;
        const {
            body: { title, date, description },
            file: { filename },
        } = req;

        try {
            const event = new EVENT({
                userId,
                title,
                image,
                description,
                date,
            });

            await event.save();
            res.json(event);
        } catch (error) {
            console.log(error.message);
            res.status(500).send(error.message);
        }
    },

    getAllEvents: async (req, res) => {
        try {
            const event = await EVENT.find();
            res.json(event);
        } catch (error) {
            console.log(error);
        }
    },

    deleteEvent: async (req, res) => {
        try {
            const event = await EVENT.findByIdAndDelete(req.params.id);
            res.json(event);
        } catch (error) {
            console.log(error);
        }
    },
    updateEvent: async (req, res) => {
        try {
            const event = await EVENT.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                }
            );
            res.json(event);
        } catch (error) {
            console.log(error);
        }
    },
    getEvent: async (req, res) => {
        try {
            const event = await EVENT.findById(req.params.id).then((EVENT) =>
                axios
                    .get(
                        `http://localhost:3002/event/getAllEvents/` +
                            EVENT.userId
                    )
                    .then((response) => {
                        const eventObject = {
                            nom: response.data.nom,
                            prenom: response.data.prenom,
                            title: EVENT.title,
                            image: EVENT.image,
                            description: EVENT.description,
                            date: EVENT.date,
                        };
                        res.json(eventObject);
                    })
            );
        } catch (error) {
            console.log(error);
        }
    },
};
