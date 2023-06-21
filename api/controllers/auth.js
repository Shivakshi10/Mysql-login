import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const login = (req, res) => {
    //CHECK USER
 
    const q = `SELECT * FROM user WHERE username = ? AND password = ?`;

    const values =[ req.body.ID , req.body.password];
  
    db.query(q, [ req.body.ID,req.body.password], (err, data) => {
      if (err) return res.status(500).json(err);
      console.log(data[0]);
      if (data.length === 0) return res.status(404).json("User not found!");
      if(data[0].password == req.body.password)
      return res.status(200).json(data[0]);

      return res.status(404).json("User not found!");

      //Check password
      //const isPasswordCorrect = bcrypt.compareSync(
       // req.body.password,
       // data[0].password

        
    });
  };
  