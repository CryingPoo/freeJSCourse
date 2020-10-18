// const smartPhones = [
//     { name:'iphone', price:649 },
//     { name:'Galaxy S6', price:576 },
//     { name:'Galaxy Note 5', price:489 }
//   ];

// let price=smartPhones.map(phone => phone.price);
// let cheapPhone = smartPhones.filter(phone =>{
//     return phone.price < 500;
// })

//maps in an array
// console.log(price);

//filter makes an array based on the condition
// console.log(cheapPhone);

// const testDiv = document.querySelector(".test");
// let number = 0
// while(testDiv.firstChild){
//   console.log(testDiv.firstChild===null);
//   console.log(testDiv.firstChild);
//   console.log('Break Done');
//   // console.log(`Found ${number} element`);
//   testDiv.removeChild(testDiv.firstChild);
//   console.log(testDiv.firstChild);
//   console.log(testDiv.firstChild===null);
// }

// function plus(x,y){
//   console.log(x+y);
//   return x+y;
// }

// const varMinus = function minus(a,b){
//   console.log(a-b);
//   return a-b;
// };

// function funcMinus(a,b){
//   console.log(a-b);
//   return a-b;
// }

// console.log(varMinus);
// console.log('break');
// console.log(funcMinus);

// const arrowF = (x,y) => {
//   console.log(x,y);
//   console.log(y,x)
// }

// arrowF(3,2);




const global = {
  home: 'home test',
  join: 'join',
}

const users = {
  users: 'users',
};

const routes = {global, users};

console.log(routes.global.home);

