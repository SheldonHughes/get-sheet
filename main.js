import { users } from "./source/source"
// console.log(users)
const section = document.getElementById('company-list')

const searchItem = document.querySelector('.searchbox')
  searchItem.addEventListener('input', e =>{
    const value = isNaN(e.target.value) ? e.target.value.toString().toLowerCase() : e.target.value.toLowerCase()
    console.log(value)
    users.forEach(user =>{
      // console.log(user)
      const isVisible = user.company.toLowerCase().includes(value) || user.name.toLowerCase().includes(value)
      // console.log(isVisible)
      user.box.classList.toggle('hide', !isVisible)
    })
})

let companyNames = []
console.log(companyNames);

function renderCompanies(company) {
  console.log(`${company} was clicked.`)
  // let box = document.createElement("div")
  //       box.className = "box"
  //       //TODO: Add phone number formatting
  //       box.innerHTML = `Name: ${key}<br>
  //                       Company: ${value.Company}<br>
                        
  //                       Phone#: ${value.Phone}`
  //       document.getElementById('container').appendChild(box)
}


async function getUniqueNames(){
  users.forEach(user =>{
    const companyName = user.company
    console.log(companyName)
    if(!companyNames.includes(companyName))
      companyNames.push(companyName)
    })
  }


async function listCompanyNames() {
  console.log('called')
  await getUniqueNames();
  companyNames.forEach(name =>{
  // console.log(name)
    let list = document.createElement('li')
    list.classList.add('company')
       list.insertAdjacentHTML("beforeend", `<a href="javascript:void(0);">${name}<span class="material-icons md-18">group</span></a>`)
    section.appendChild(list)
    list.addEventListener('click', function(){
      renderCompanies(name)})
  })
}

window.addEventListener('load', listCompanyNames)

