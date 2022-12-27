const view = $('#view')
import { carsPageLoaded } from "./cars/cars.js";

export const navigateTo = async (path, dist)=>{
    view.load(path)
    if(dist === 'cars'){
        await carsPageLoaded()
    }
}