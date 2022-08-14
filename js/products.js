

let carsProductList = [];

function showCategoriesList() {

    let htmlContentToAppend = "";
    for (let i = 0; i < carsProductList.length; i++) {
        let car = carsProductList[i];

        htmlContentToAppend += `
            <div onclick="setCatID(${car.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${car.image}" alt="${car.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${car.name}</h4>
                            <small class="text-muted"> Autos vendidos:${car.soldCount} </small>
                        </div>
                        <br> 
                        <br>
                        <p class="mb-1"> Descripcion: </p>
                        <p class="mb-1">${car.description}</p>
                        <p class="mb-1">${car.currency} ${car.cost}</p>
                        
                    </div>
                </div>
            </div>
             `
        document.getElementById("car-list-container").innerHTML = htmlContentToAppend;
    }
}


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CARS_PRODUCT_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            carsProductList= resultObj.data.products
            showCategoriesList()
            
        }
    });
});


