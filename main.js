//use strict

import Papa from 'papaparse';
//Google Sheets URL
const spreadsheet = "https://docs.google.com/spreadsheets/d/1yIEHomTq8iLlrk1xGzaN19xWFFxZQfWmBj4LLRfbKw0/export?gid=877321553&format=csv"

let users = [];


  // setTimeout(() => {
  //   console.log(users);
  // }, 5000);


const userData = function() {
  return new Promise((resolve, reject) => {
    try {
      Papa.parse(spreadsheet, {
        download: true,
        header: true,
        complete: function(results) {
          resolve(results.data)
          const data = results.data
          // console.log(data)
          return data;
        }
      })
    } catch (error) {
        throw new Error(`Something failed`);      
    }
  })
}

users = userData()
.then(res=> {
  // console.log(res)
          users = res.map(el => {
            let box = document.createElement("div")
            box.className = "box"
            //TODO: Add phone number formatting
            box.innerHTML = `<strong>Name:</strong> ${el.Name}<br>
            <strong>Company:</strong> ${el.Company}<br>
          
            <strong>Phone#:</strong> ${el.Phone}`
            document.getElementById('container').appendChild(box)
            return {name: el.Name, company: el.Company, phone: el.Phone, box: box}
          })
          // console.log(users)
          listCompanyNames();
})


// setTimeout(()=>{
//   // console.log(users)
//     users.forEach(user=>{
//       console.log(user)
//     })},
//   3000)


// async function getUserData() {}

// async function renderCompanies(){

// };
  // console.log(users)
const section = document.getElementById('company-list')

const searchItem = document.querySelector('.searchbox')
  searchItem.addEventListener('input', e =>{
    const value = isNaN(e.target.value) ? e.target.value.toString().toLowerCase() : e.target.value.toLowerCase()
    // console.log(value)
    // console.log(users)
    users.forEach(user =>{
      // console.log(user)
      const isVisible = user.company.toLowerCase().includes(value) || user.name.toLowerCase().includes(value)
      // user.box.classList.toggle('hide', !isVisible)
      if(!isVisible) {
        user.box.style.display = "none";
      }else {
        user.box.style.display = "";
      }
    })
})

// console.log(companyNames);

function sortCompanies(company) {
  console.log(`${company} was clicked.`)
  const value = isNaN(company) ? company.toString().toLowerCase() : company.toLowerCase()
    users.forEach(user =>{
      const isVisible = user.company.toLowerCase().includes(value)
      // user.box.classList.toggle('hide', !isVisible)
      if(!isVisible) {
        user.box.style.display = "none";
      }else {
        user.box.style.display = "";
      }
    })
}


async function getUniqueNames(){
  // console.log(`1:called`)
  let companyNames = []
  users.forEach(user =>{
    const companyName = user.company
    // console.log(companyName)
    if(!companyNames.includes(companyName))
      companyNames.push(companyName)
    }); return companyNames
}


async function listCompanyNames() {
  // console.log('called')
  const companyNamesArr = await getUniqueNames();
    companyNamesArr.forEach(name => {
      // console.log(name)
      let list = document.createElement('li')
      list.classList.add('company')
      list.insertAdjacentHTML("beforeend", `<a href="javascript:void(0);">${name}<span class="material-icons md-18">group</span></a>`)
      section.appendChild(list)
      list.addEventListener('click', function () {
        sortCompanies(name)
      })
    })
}

if(module.hot) {
  module.hot.accept();
};

// init()

// window.addEventListener('load', listCompanyNames)

