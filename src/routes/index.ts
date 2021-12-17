import express from 'express';
import { promises as fspromises } from 'fs';
import csv from 'csvtojson';

const convert = express.Router();

const csvFile='./users.csv';
const jsonFile='./outputJsonFile.json';

convert.get('/convert',(req,res)=>{
    csv().fromFile(csvFile).then((data)=>{
        let extractedData= data.map((item:{first_name:string, last_name: string, phone:string})=>{
            let fname=item.first_name;
            let lname=item.last_name;
            let ph=item.phone;
            if(ph==="") ph="missing data";
            return {fname, lname, ph};
        });
        res.send(JSON.stringify(extractedData));
        fspromises.writeFile(jsonFile, JSON.stringify(extractedData));
    });
    
});
export default convert;