async function getUsers() {
  let url = (`https://makeup-api.herokuapp.com/api/v1/products.json/`);
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}

// Getting HTML Element 

async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="user">
                            <h2 class="brand">${user.brand}</h2> 
                            <img class="imgstyle" src="${user.image_link}">  
                            <h6 class="brand-name">${user.name}</h6> 
                            <p class ="brand-price"><Strong>Price: $ ${user.price}</Strong></p>
                            <p class = "brand-descr">${user.description}</p>
                        </div>`;

        html += htmlSegment;
    });
 
//add all element html into class container

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();