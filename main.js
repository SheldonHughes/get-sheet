let users = [];

fetch('phone_numbers.json')
  .then(response => response.json())
  .then(json => {
    // console.log(json)

    //Check into removing the first json.map and beginning with Object.entries()
   json.map(user => {
      // console.log(user)
      // debugger
      Object.entries(user).forEach(([key, value])=>{
        // console.log(`This is ${key} of ${value.Company}`)
        let box = document.createElement("div")
        box.className = "box"
        //TODO: Add phone number formatting
        box.innerHTML = `Name: ${key}<br>
                        Company: ${value.Company}<br>
                        
                        Phone#: ${value.Phone}`
        document.getElementById('container').appendChild(box)
        users.push({company: value.Company, name: key, phone: value.Phone, box: box})
      })
            })
        }
      )
      
console.log(users)

const searchItem = document.querySelector('.searchbox')
  searchItem.addEventListener('input', e =>{
    const value = isNaN(e.target.value) ? e.target.value.toString().toLowerCase() : e.target.value.toLowerCase()
    users.forEach(user =>{
      console.log(user)
      const isVisible = user.company.toLowerCase().includes(value) || user.name.toLowerCase().includes(value)
      user.box.classList.toggle('hide', !isVisible)
    })
})
