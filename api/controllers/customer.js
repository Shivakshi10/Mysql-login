import { db } from "../db.js";

export const addOrder = (req,res) =>{
 console.log(req.body);
      const q =
        "INSERT INTO customer(`orderDate`, `company`, `owner`, `item`, `quantity`,`weight`,`shipment`,`trackingID`, `size`,`boxCount`,`specification`,`checklistQ`,`uid`) VALUES (?)";
 
      const values = [
        req.body.inputs.orderDate,
        req.body.inputs.company,
        req.body.inputs.owner,
        req.body.inputs.item,
        req.body.inputs.quantity,
        req.body.inputs.weight,
        req.body.inputs.shipment,
        req.body.inputs.trackingID,
        req.body.inputs.size,
        req.body.inputs.boxCount,
        req.body.inputs.specification,
        req.body.inputs.checklistQ,
        req.body.uid
      ];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Order has been created.");
      });
   
}