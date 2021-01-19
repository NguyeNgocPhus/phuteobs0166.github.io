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

// Promise.all([nhan(4,5),cong(4,5)]).then(res=>console.log(flattenComments(res)))
Promise.all([nhan(4,5),cong(4,5),nhan(2,3)]).then(res=>console.log(res))