// let add=(x, y) => x + y
// console.log(add(2,3));


// let x = prompt("salom");
// for (let i = 0; i < 2; i++  ) {
//     if([i] === true){

//     }
// }
// let a = [1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5]
// function add(x) {
//     let y = []
//     for (let i = 0; i < x.length; i++) {
//         if (!y.includes(x[i])) {
//             y.push(a[i])
//         }
//     }
//     return y
// }

// console.log(add(a));

// let a = [1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5]
// let b = [...new Set(a)];
// console.log(b);
// const card = document.querySelector('.card')
// const box = document.querySelector('.box')
// const api = "https://jsonplaceholder.typicode.com/users"
// fetch(api)
//     .then(res => res.json())
//     .then(data => {
//         data.map((item) => {
//             card.innerHTML += `
//         <div class="box">
//             <h1>${item.email}</h1>
//             <p>${item.name}</p>
//             <span>${item.username}</span>
//         </div>
//         `
//         })
//     })


// console.log(api);

// let name;
// do {
//   name = prompt('Enter your name');
// } while (!name);
// console.log(name);


// import { data } from "./data.js";
// const card = document.querySelector('.card');
// const box = document.querySelector('.box');

// data.map((item) => {
//   card.innerHTML += `
//   <div class="box"  >
//   <p>${item.name}</p>
//   <h3>${item.surname}</h3>
//   <span>${item.age}</span>
//   <h4>slaom</h4>
// </div>
//   `
// })

// function add(x) {
//   let y = []
//   for (let i = 1; i <=7; i++) {
//     y.push(i)
//   }
//   return y.reverse();
// }
// console.log(add(7));
const nuqta = "..."
const card = document.querySelector('.card')
const box = document.querySelector('.box')
const api = "https://jsonplaceholder.typicode.com/users"
fetch(api)
  .then(res => res.json())
  .then(data => {
    data.map((item) => {
      if ((item.name).length < 15) {
        console.log(item.name);
      } else {
        console.log((item.name).slice(0, 20).concat(nuqta));
      }
      card.innerHTML += `
        <div class="box">
            <p>${item.name}</p>
        </div>
        `
    })
  })
