
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
add(4,5).then(res=>console.log(res),err=>console.log(err));
console.log('ok');
let af=async()=>{
    const ans=await add(2,5);
    console.log((ans));
    console.log('xin chao');
}
af();


