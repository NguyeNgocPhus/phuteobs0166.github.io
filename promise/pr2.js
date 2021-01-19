 const fs=require('fs');
 const add=(a,b)=>{
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           if(typeof a!='number'||typeof b!='number'){
               return reject(new Error('tham so khong phai kieu number'));
           }
           resolve(a+b);

        },2000);
     });
 }
 add(4,5).then((res)=>console.log(res),(err)=>console.log(err+' '));
//  const promireread=(filename)=>{
//     return new Promise((resolve,reject)=>{
//     fs.readFile(filename,'utf8',(err,data)=>{
//         if(err) return reject('loi: ');
//         return resolve(data);
//     });
//  });
// }
//  promireread('./ok.txt').then((data)=>{console.log(data)},(err)=>{console.log(err,'')});
 