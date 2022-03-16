let users = [];

fetch('./phone_numbers.json')
  .then(response => response.json())
  .then(json => {
    // console.log(json)
    // for(let user in json) {
    //   // console.log(user, json[user])
    //   for(let el in json[user]) {
    //     console.log(user, json[user].Company)
    //   }
    // }
    //Check into removing the first json.map and beginning with Object.entries()
    users = //json.map(user => {
      Object.entries(json).map(([key, value])=>{
        // console.log(`This is ${key} of ${value.Company}`)
        let box = document.createElement("div")
        box.className = "box"
        box.innerHTML = `User: ${key}<br>
        ${value.Company}`
        document.getElementById('container').appendChild(box)
        return {company: value.Company, name: key, box: box}
      })
            })
       //   }
       //)

const searchItem = document.querySelector('.searchbox')
  searchItem.addEventListener('input', e =>{
    const value = isNaN(e.target.value) ? e.target.value.toString() : e.target.value.toLowerCase()
    users.forEach(user =>{
      console.log(user)
      const isVisible = user.company.toLowerCase().includes(value) || user.name.toString().includes(value)
      user.box.classList.toggle('hide', !isVisible)
    })
})
