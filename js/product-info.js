  let dataProducts = {};
  let commentProducts = [];
  let imagesProducts = [];
  const checkedStar = "fa fa-star checked";
  const uncheckedStar ="fa fa-star";
  let infoProductsContainer = document.getElementById("infoProduct");
  
  fetch (PRODUCT_INFO_URL).then(response=>response.json()).then(data =>{   
    dataProducts = data;
      imagesProducts = dataProducts.images;
      showProductTitle ();
      showProductData ();
      showProductImages(imagesProducts);
      relatedProduct ();
      });
  
  fetch (PRODUCT_INFO_COMMENTS_URL).then(response=>response.json()).then(data =>{   
     let html="";
      
     for (let i=0; i<data.length; i++){
      html +=getProductComments(data[i].user, data[i].dateTime, data[i].score, data[i].description);
  
     }
      document.getElementById("Comments").innerHTML= html;
      });      
   
  
  function showProductTitle (){
      let productTitle = document.getElementById("nameProduct");
      productTitle.innerHTML = dataProducts.name;
  
  }
  
  function showProductData (){
      let productData = document.getElementById("infoProduct");
      
      productData.innerHTML = `
      <p class="mb-2"><b> Precio:</b> <p>
      <p class="mb-1">U$S ${dataProducts.cost}</p>
      <br>
      <p class="mb-2"><b> Descripción:</b> </p>
      <p class="mb-1">${dataProducts.description}</p>
      <br>
      <p class="mb-2"> <b>Categoria:</b> <p>
      <p class="mb-1">${dataProducts.category}</p>
      <br>
      <p class="mb-2"> <b>Cantidad de vendidos:</b> <p>
      <p class="mb-1">${dataProducts.soldCount}</p>
      <br>
      <p class="mb-2"><b> Imagenes ilustrativas: </b><p>
  
      `;
      
              
      }
      function showProductImages(){
        let htmlImageToAppend = "";
        let itemClass = "carousel-item active";
        for (let image of imagesProducts) {
            htmlImageToAppend =  `
            <div class="` + itemClass + `">
                <img src=" ` + image + `" alt="imagen de producto" class="d-block w-100" >
            </div>`
            itemClass = "carousel-item";
            document.getElementById("productImages").innerHTML += htmlImageToAppend;    
    }
    
}
  const getProductComments = (user,dateTime,score, description )=> {
      return `<div>
        <p><b>${user}</b>-${dateTime}-${crearScore(score)}</p>
        <p>${description}</p>
        <hr>
        </div> 
    `
    ;
   
    };
    function crearScore(score){
      let htmlScore ="";
     for(let i=1; i<6; i++){
      htmlScore += `<span class="${score>=i ? checkedStar : uncheckedStar }"></span>`
     }
     return htmlScore;
    }
  

    function relatedProduct () {
        let relatedProduct = document.getElementById ('relatedProduct')
        for (let product of dataProducts.relatedProducts){
            relatedProduct.innerHTML+= `
            <div onclick="setProductID(${product.id})" class="m-0 w-25">
   
       
            <img src="${product.image}" alt="${product.name}" class="img-thumbnail imgsize">
            <p class="mb-1">${product.name}</p>
            
          
            </div>
            `
        }
    }


 


