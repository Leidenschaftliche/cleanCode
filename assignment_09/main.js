
function calculateOrderTotal(order) {
  updateInventory(order.items);
  const totalPrice = calculateTotalPrice(order.items);
  const invoice = generateInvoice(order, totalPrice);
  return {totalPrice, invoice};
}

function updateInventory(items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    // Update inventory for this item
    item.id=i*4
    item.unitPrice=100;
    item.quantitiy=5;
  }
}

function calculateTotalPrice(items) {
  // code for calculate total price
  let totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    let item = order.items[i];
    totalPrice += item.quantity * item.unitPrice;
  }
  
  return totalPrice;
}

function generateInvoice(order,totalPrice){
  console.log(`Order: ${order}\nPrice${totalPrice}\n`)
}
