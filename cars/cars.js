import { loadCarList } from "../api/cars.js";

let cars = []

export const carsPageLoaded = async()=>{
    cars = []
    await loadCarList()
    .then((res)=>{
        cars = res.cars
        console.log(cars);
    })

    cars.forEach(car => {
    const line = $('<tr></tr>')
    const id = $(`<td>${car.id}</td>`)
    const brand = $(`<td>${car.brand}</td>`)
    const model = $(`<td>${car.model}</td>`)
    const price = $(`<td>${car.price_day}</td>`)
    const btnTd = $('<td></td>')
    const myDiv = $('<div id="buttons"></div>')
    const edit = $('<button id="btn-edit">edit</button>')
    const remove = $('<button id="btn-remove">remove</button>')
    myDiv.append(edit, remove)
    btnTd.append(myDiv)
    line.append(id, brand, model, price, btnTd)
    $('#tbl').append(line)
});
}

