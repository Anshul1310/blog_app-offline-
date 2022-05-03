const fs=require('fs');

export default async function handler(req, res) {
  //           const arr = [{x:0,y:8}];

  // fs.readdir("blogspot",(err,files)=>{
  //       if(err){
  //           console.log(err);
  //       }else{
  //         console.log(arr);
  //             files.map( (value)=>{
  //               let totalValues;
  //               let myFile=await fs.readFile("blogspot/"+value, "utf-8");
  //               arr.push(JSON.parse(data));
  //            })
  //          res.status(500).json(arr);
  //       }
  //   });

  let data= await fs.promises.readdir("blogspot");
  let myfile;
  let arr=[];
  for(let i=0;i<data.length;i++){
      myfile=await fs.promises.readFile("blogspot/"+data[i], "utf-8");
      arr.push(JSON.parse(myfile));
  }
  res.status(200).json(arr);

}
