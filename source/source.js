// //Move functions to get current info into this sheet;

// import Papa from 'papaparse';
// //Google Sheets URL
// const spreadsheet = "https://docs.google.com/spreadsheets/d/1yIEHomTq8iLlrk1xGzaN19xWFFxZQfWmBj4LLRfbKw0/export?gid=877321553&format=csv"

// export function getUsers(users) {
//   Papa.parse(spreadsheet, {
//     download: true,
//     header: true,
//     complete: function(results) {
//       try {
//         // console.log(results)
//         const data = results.data
//         // console.log(data)
//         users = data.map(el => {
//           let box = document.createElement("div")
//           box.className = "box"
//           //TODO: Add phone number formatting
//           box.innerHTML = `Name: ${el.Name}<br>
//           Company: ${el.Company}<br>
          
//           Phone#: ${el.Phone}`
//           document.getElementById('container').appendChild(box)
//           return {name: el.Name, company: el.Company, phone: el.Phone}
//         })
//         console.log(users)
//       } catch (err) {
//         throw new Error(`Something failed`);
//       }
//     }
//   })
// }





//TODO:Integrate below return code into above fetch.


// window.addEventListener('DOMContentLoaded', init)

// fetch('phone_numbers.json')
//   .then(response => response.json())
//   .then(json => {
//    json.map(user => {
//       Object.entries(user).forEach(([key, value])=>{
//         let box = document.createElement("div")
//         box.className = "box"
//         //TODO: Add phone number formatting
//         box.innerHTML = `Name: ${key}<br>
//                         Company: ${value.Company}<br>
                        
//                         Phone#: ${value.Phone}`
//         document.getElementById('container').appendChild(box)
//         users.push({company: value.Company, name: key, phone: value.Phone, box: box})
//               })
//             })
//         }
//       )

// const searchItem = document.querySelector('.searchbox')
//   searchItem.addEventListener('input', e =>{
//     const value = isNaN(e.target.value) ? e.target.value.toString().toLowerCase() : e.target.value.toLowerCase()
//     console.log(value)
//     users.forEach(user =>{
//       // console.log(user)
//       const isVisible = user.company.toLowerCase().includes(value) || user.name.toLowerCase().includes(value)
//       // console.log(isVisible)
//       user.box.classList.toggle('hide', !isVisible)
//     })
// })
