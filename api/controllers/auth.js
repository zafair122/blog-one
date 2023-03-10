import { db } from '../db.js'
import bcrypt from 'bcryptjs'

export const register = (req, res) => {

    //CHECH EXISTING USER
    const q = "SELECT * FROM USERS WHERE email = ? OR username = ?";
    db.query(q, [req.body.email, req.body.name], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("User already exists!");

        //HASH THE PASSWORD AND CREATE A USER
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const qe = "INSERT INTO users(`username`, `email`,`password`) VALUES (?)";
        const values = [
            req.body.username,
            req.body.email,
            hash,
        ]

        db.query(qe, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("User has been created successfully.");
        })
    })

}
export const login = (req, res) => {

}
export const logout = (req, res) => {

}