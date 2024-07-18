const cart = ["oneplus", "iphone"];
const promise = createOrder(cart);

promise.then((orderId) => {
    console.log("Order Id", orderId);
}).catch((err)=>{
    console.log(err)
})

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}

function validateCart(cart) {
  return true;
}