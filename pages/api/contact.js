const fs =require("fs");
var cors = require('cors')
const express=require("express");
var app = express()
app.use(cors())
export default async function handler(req,res){
	if(req.method=="POST"){
		let data= await fs.promises.readdir("queries");
		const obj=JSON.stringify({
			name:req.body.name,
			email:req.body.email,
			query:req.body.query
		});
		fs.promises.writeFile(`queries/contact${data.length+1}.json`, obj);
		res.status(200).json({hi:"Done"});
	}else{
		res.status(400).json({status:"false"});
	}
}