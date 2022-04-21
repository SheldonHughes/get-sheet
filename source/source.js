//Move functions to get current info into this sheet
export let users = [];

fetch('phone_numbers.json')
  .then(response => response.json())
  .then(json => {
   json.map(user => {
      Object.entries(user).forEach(([key, value])=>{
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
      
