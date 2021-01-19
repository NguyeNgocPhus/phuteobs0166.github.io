const cong=(a,b)=>{
    return new Promise((resolve,reject)=>{
        if(typeof a!='number'||typeof b!='number'){
              return reject(new Error('tham so khong phai kieu number'));
        }
       return  resolve(a+b);
    });
}
const nhan=(a,b)=>{
    return new Promise((resolve,reject)=>{
        if(typeof a!='number'||typeof b!='number'){
              return reject(new Error('tham so khong phai kieu number'));
        }
        resolve(a*b);
    });
}
const chia=(a,b)=>{
    return new Promise((resolve,reject)=>{
        if(typeof a!='number'||typeof b!='number'){
              return reject('tham so khong phai kieu number');
        }
        resolve(a/b);
    });
} 
const S=async (a,b,h)=>{
    try{
        const x1=await cong(a,b);
        const x2=await nhan(x1,h);
        const x3=await chia(x2,2);
        return x3;
    }
    catch(e){
        return Promise.reject(e);
    }
    
}
S('2',3,4).then(ans=>console.log(ans),err=>console.log(err));
console.log('hello');
// add(4,5).then(res=>add(res,7),err=>console.log(err+' ')).then(ans=>console.log(ans),loi=>console.log(loi+' '));
// const S=(a,b,h)=>{
//     cong(a,b).then(res=>console.log(res))
// //     .then(res=>nhan(res,h))
// //     .then(result=>chia(result,2))
// //     .then(s=>console.log('dien tich hinh thang là :'+s))
// //     .catch(err=>console.log('loi cmm rồi :'+ err))
// };

//b.then(res=>console.log(res));