const cart = ["oneplus", "iphone"];
const promise = createOrder(cart);
console.log("Promise", promise); // in case of delay promise will be in "pending" state

// now we have added timeout so response will take some time to return. Once the response is ready next line will start execution
promise
  .then((orderId) => {
    console.log("Order Id", orderId);
  })
  .catch((err) => {
    console.log(err);
  });

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      //   resolve(orderId);
      setTimeout(() => {
        resolve(orderId);
      }, 3000);
    }
  });
  return pr;
}

function validateCart(cart) {
  return true;
}
