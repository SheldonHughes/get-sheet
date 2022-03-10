let users = [];

fetch('./phone_numbers.json')
  .then(response => response.json())
  .then(json => {
    // console.log(json)
    for(let user in json) {
      // console.log(user, json[user])
      for(let el in json[user]) {
        console.log(user, json[user].Company)
      }
    }
    // users = json.map(user => {
    //   let box = document.createElement("div")
    //   box.className = "box"
    //   box.innerHTML = `User ID: ${user.id}<br>
    //                     ${user.name}`
    //   document.getElementById('container').appendChild(box)
    //   return {name: user.name, userID: user.id, box: box}
            // })
          }
       )

const searchItem = document.querySelector('.searchbox')
  searchItem.addEventListener('input', e =>{
    const value = isNaN(e.target.value) ? e.target.value.toString() : e.target.value.toLowerCase()
    users.forEach(user =>{
      console.log(user)
      const isVisible = user.name.toLowerCase().includes(value) || user.userID.toString().includes(value)
      user.box.classList.toggle('hide', !isVisible)
    })
})
