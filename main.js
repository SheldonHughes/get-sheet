import { users } from "./source/source"
// console.log(users)

const searchItem = document.querySelector('.searchbox')
  searchItem.addEventListener('input', e =>{
    const value = isNaN(e.target.value) ? e.target.value.toString().toLowerCase() : e.target.value.toLowerCase()
    users.forEach(user =>{
      console.log(user)
      const isVisible = user.company.toLowerCase().includes(value) || user.name.toLowerCase().includes(value)
      user.box.classList.toggle('hide', !isVisible)
    })
})

let companyNames = []
console.log(companyNames);

window.addEventListener('load', function() {
  users.forEach(user =>{
    const companyName = user.company
    if(!companyNames.includes(companyName))
    companyNames.push(companyName)
  })}
)
