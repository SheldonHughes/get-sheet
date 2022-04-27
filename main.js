import { users } from "./source/source"
// console.log(users)
const section = document.getElementById('company-list')

const searchItem = document.querySelector('.searchbox')
  searchItem.addEventListener('input', e =>{
    const value = isNaN(e.target.value) ? e.target.value.toString().toLowerCase() : e.target.value.toLowerCase()
    // console.log(value)
    users.forEach(user =>{
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

function renderCompanies(company) {
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
  console.log(`1:called`)
  let companyNames = []
  users.forEach(user =>{
    const companyName = user.company
    // console.log(companyName)
    if(!companyNames.includes(companyName))
      companyNames.push(companyName)
    }); return companyNames
}


async function listCompanyNames() {
  console.log('called')
  const companyNamesArr = await getUniqueNames();
  // Try a then chain???
  companyNamesArr.forEach(name => {
    console.log(name)
    let list = document.createElement('li')
    list.classList.add('company')
    list.insertAdjacentHTML("beforeend", `<a href="javascript:void(0);">${name}<span class="material-icons md-18">group</span></a>`)
    section.appendChild(list)
    list.addEventListener('click', function () {
      renderCompanies(name)
    })
  })
}

window.addEventListener('load', listCompanyNames)

