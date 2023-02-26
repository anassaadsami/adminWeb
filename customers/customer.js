import { loadCustomerList } from "../api/customer.js";
import { listCustomerOrders, cancelOreder } from "../api/booking.js";

let customers = [];

export const customrPageLoaded = async () => {
  customers = [];
  await loadCustomerList().then((res) => {
    customers = res.customers;
    console.log(customers);
  });

  customers.forEach((customer) => {
    const line = $("<tr></tr>");
    const id = $(`<td>${customer.id}</td>`);
    const customerName = $(`<td>${customer.name}</td>`);
    const userName = $(`<td>${customer.username}</td>`);
    const passWord = $(`<td>${customer.password}</td>`);
    const adress = $(`<td>${customer.address.city}</td>`);
    const role = $(`<td>${customer.role}</td>`);
    const show_orders_btn = $(`<td><button>show orders</button></td>`);
    line.append(
      id,
      customerName,
      userName,
      passWord,
      adress,
      role,
      show_orders_btn
    );
    $("#tbl").append(line);

    show_orders_btn.click(async () => {
      $("#tbl").addClass("hidden");
      $("#ordersTable").removeClass("hidden");
      await listCustomerOrders(customer.name).then((result) => {
        
        result.bookings.forEach((booking) => {
          const order_row = $("<tr></tr>");

          const td_id = $(`<td>${booking.id}</td>`);
          const td_car = $(`<td>${booking.car.brand}</td>`);
          const td_booking_date = $(`<td>${booking.createAt}</td>`);
          const td_cancel_order = $(`<td><button>cancel order</button><td>`);

          order_row.append(
            td_id,
            td_car,
            td_booking_date,
            td_cancel_order
          );
          $("#ordersTable").append(order_row);

          td_cancel_order.click(async () => {
            await cancelOreder(booking.id);
            order_row.css("opacity", "0.5");
          });
        });
      });
    });
  });
};


