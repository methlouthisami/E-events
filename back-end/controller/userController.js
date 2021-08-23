const USER = require("../model/userModel");
const bcrypt = require("bcrypt");

module.exports = {
    addUser: async (req, res) => {
        const salt = await bcrypt.genSalt(10);

        const nom = req.body.nom;
        const prenom = req.body.prenom;
        const email = req.body.email;
        const hashedPasswor = await bcrypt.hash(req.body.password, salt);
        const password = hashedPasswor;
        try {
            user = await new USER({
                nom,
                prenom,
                email,
                password,
            });
            await user.save();
            res.json(user);
        } catch (error) {
            console.log(error);
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const user = await USER.find();
            res.json(user);
        } catch (error) {
            console.log(error);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const user = await USER.findByIdAndDelete(req.params.id);
            res.json(user);
        } catch (error) {
            console.log(error);
        }
    },
    updateUser: async (req, res) => {
        try {
            const user = await USER.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });
            res.json(user);
        } catch (error) {
            console.log(error);
        }
    },
    getUser: async (req, res) => {
        try {
            const user = await USER.findById(req.params.id);
            res.json(user);
        } catch (error) {
            console.log(error);
        }
    },
};
