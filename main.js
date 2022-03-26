import { users } from "./source/source"
// console.log(users)

const searchItem = document.querySelector('.searchbox')
  searchItem.addEventListener('input', e =>{
    const value = isNaN(e.target.value) ? e.target.value.toString().toLowerCase() : e.target.value.toLowerCase()
    users.forEach(user =>{
      // console.log(user)
      const isVisible = user.company.toLowerCase().includes(value) || user.name.toLowerCase().includes(value)
      user.box.classList.toggle('hide', !isVisible)
    })
})

let companyNames = []
console.log(companyNames);

const section = document.getElementById('company-list')


function getUniqueNames(){
  users.forEach(user =>{
    const companyName = user.company
    if(!companyNames.includes(companyName))
      companyNames.push(companyName)
    })
  }


async function listCompanyNames() {
  await getUniqueNames();
  companyNames.forEach(name =>{
  console.log(name)
    let list = document.createElement('li')
    list.classList.add('company')
       list.insertAdjacentHTML("beforeend", `<a href="javascript:void(0);">${name}<span class="material-icons md-18">group</span></a>`)
    section.appendChild(list)
  })
}

window.addEventListener('load', listCompanyNames)

