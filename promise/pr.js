const tong=(a,b,c)=>{
    setTimeout(()=>{
        if((a+b)%2==0){
            return c("chan");
        }
        else return c("le");
    },2000);
      
}
console.log('1');
tong(2,3,c=>{
    console.log(c);
})
console.log('2');


