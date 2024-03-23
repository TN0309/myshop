let elList = document.querySelector('.products_list')
fetch('https://fakestoreapi.com/products')
.then((res)=> res.json())
.then(data=> fnRender(data))

function fnRender(data) {
  data.map(item=>{
    let newLi = document.createElement('li')
    newLi.classList = 'products_item'
    newLi.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card_img" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.description}</p>
      <div class="d-flex justify-content-between mt-2">
      <span class="card_see"> <i class="bi bi-eye"></i>${item.rating.count}</span>   
      <span class="card_star">
      ${item.rating.rate
         -1 >0 ? ' <i class="bi bi-star-fill"></i > ':item.rating.rate
       - 0 > 0 ? '<i class="bi bi-star-half"></i>' :   ' <i class="bi bi-star"></i> '  }
      ${item.rating.rate
         -2 >0 ? ' <i class="bi bi-star-fill"></i > ':item.rating.rate
       - 1 > 0 ? '<i class="bi bi-star-half"></i>' :   ' <i class="bi bi-star"></i> '  }
      ${item.rating.rate
         -3 >0 ? ' <i class="bi bi-star-fill"></i > ':item.rating.rate
       - 2 > 0 ? '<i class="bi bi-star-half"></i>' :   ' <i class="bi bi-star"></i> '  }
      ${item.rating.rate
         -4 >0 ? ' <i class="bi bi-star-fill"></i > ':item.rating.rate
       - 3 > 0 ? '<i class="bi bi-star-half"></i>' :   ' <i class="bi bi-star"></i> '  }
      ${item.rating.rate
         -5 >0 ? ' <i class="bi bi-star-fill"></i > ':item.rating.rate
       - 4 > 0 ? '<i class="bi bi-star-half"></i>' :   ' <i class="bi bi-star"></i> '  }
      ${item.rating.rate}</span>     
     </div> 
     <div  class="d-flex justify-content-between align-items-center mt-3 
">
      <p class="bg-info"> $${item.price} </p>
    <button class="btn btn-primary ">BUY</button>
    </div>
    </div>
  </div>
    `
    elList.appendChild(newLi)
  })  
  
}