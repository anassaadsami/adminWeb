import { loadCarList, deleteCar, addCar, updateCar } from "../api/cars.js";

let cars = [];
export const carsPageLoaded = async () => {
  cars = [];
  await loadCarList().then((res) => {
    cars = res.cars;
  });

  cars.forEach((car) => {
    const line = $("<tr></tr>");
    const id = $(`<td>${car.id}</td>`);
    const brand = $(`<td>${car.brand}</td>`);
    const model = $(`<td>${car.model}</td>`);
    const price = $(`<td>${car.price_day}</td>`);
    const btnTd = $("<td></td>");
    const myDiv = $('<div id="buttons"></div>');
    const newCarDiv = $('<div id="newCar" class="hidden"></div>');
    const editCarDiv = $('<div id="editCar" class="hidden"></div>');
    const edit = $('<button id="btn-edit">edit</button>');
    const remove = $('<button id="btn-remove">remove</button>');
    const adCar = $('<button id="btn-add">add car</button>');
    
    
    remove.click(async () => {
      await deleteCar(car.brand);
      line.remove();
    });
    const idLabel = $("<p>id car</p>");
    const brandLabel = $("<p>brand car</p>");
    const modelLabel = $("<p>model</p>");
    const priceLabel = $("<p>price</p>");
    
    const idInput = $('<input type="number" />');
    const brandInput = $('<input type="text" />');
    const modelInput = $('<input type="text" />');
    const priceInput = $('<input type="number" /><br>');
    
    const save = $("<button id='saveNew'>save</button>");
    save.css('color','green');
    const submit = $("<button>submit</button>");

    newCarDiv.append(
      brandLabel,
      brandInput,
      modelLabel,
      modelInput,
      priceLabel,
      priceInput,
      save
    );

    const newPriceLabel = $("<p>new price</p>");
    const newPriceInput = $('<input type="number" />');
    editCarDiv.append(newPriceLabel, newPriceInput, submit);

    myDiv.append(edit, editCarDiv, remove);
    btnTd.append(myDiv, newCarDiv, adCar);
    line.append(id, brand, model, price, btnTd);
    $("#tbl").append(line);

    adCar.click(function () {
      newCarDiv.removeClass("hidden");
      newCarDiv.css("border","1px solid black");
      newCarDiv.css()
      
    });

    edit.click(function () {
      editCarDiv.removeClass("hidden");
    });

    save.click(async () => {
      car.id = idInput.val();
      car.brand = brandInput.val();
      car.model = modelInput.val();
      car.price_day = priceInput.val();
      await addCar(car);
    });
    submit.click(async () => {
      car.price_day = newPriceInput.val();
      await updateCar(car.brand, car);
    });
  });
};

