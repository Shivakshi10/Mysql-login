import {db} from "../db.js"

export const getSum = (req,res) =>{

    //const q = 'SELECT username, u.uid, SUM(c.quantity) as totalQuantity, SUM(c.weight) as totalweight ,SUM(c.boxCount) as totalbox  FROM user u JOIN customer c ON u.uid = c.uid GROUP BY u.uid';
    const q = "SELECT SUM(quantity) as Q, SUM(weight) as W, SUM(boxCount) as B FROM customer"
  db.query(q, [], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  }); 
}

export const getOrders = (req,res) =>{
   
        const q = 'SELECT username, u.uid, SUM(c.quantity) as totalQuantity, SUM(c.weight) as totalweight ,SUM(c.boxCount) as totalbox  FROM user u JOIN customer c ON u.uid = c.uid GROUP BY u.uid';
      
      db.query(q, [], (err, data) => {
        if (err) return res.status(500).send(err);
    
        return res.status(200).json(data);
      }); 
    }





 /* export const getPost = (req,res) =>{
    const q =
    "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
} */