// promise all

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(console.log("P1 Success"));
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(console.log("P2 Success"));
    reject(console.log("P2 failure"));
  }, 2000);
});

const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(console.log("P3 Success"));
  }, 1000);
});

Promise.all([p1, p2, p3])
  .then((response) => {
    console.log("Execution Response ", response);
  })
  .catch((error) => {
    console.log("Execution Error ", error);
  });

// promise all settled

const p4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(console.log("P4 Success"));
  }, 3000);
});

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(console.log("P5 Success"));
    reject(console.log("P5 failure"));
  }, 2000);
});

const p6 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(console.log("P6 Success"));
  }, 1000);
});

Promise.allSettled([p4, p5, p6])
  .then((response) => {
    console.log("Execution Response ", response);
  })
  .catch((error) => {
    console.log("Execution Error ", error);
  });

// promise race

const p7 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(console.log("P7 Success"));
  }, 3000);
});

const p8 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(console.log("P8 Success"));
    reject(console.log("P8 failure"));
  }, 2000);
});

const p9 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(console.log("P9 Success"));
  }, 1000);
});

Promise.race([p7, p8, p9])
  .then((response) => {
    console.log("Execution Response ", response);
  })
  .catch((error) => {
    console.log("Execution Error ", error);
  });

// promise all settled

const p10 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(console.log("P10 Success"));
  }, 3000);
});

const p11 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(console.log("P11 Success"));
    reject(console.log("P11 failure"));
  }, 2000);
});

const p12 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(console.log("P12 Success"));
  }, 1000);
});

Promise.any([p10, p11, p12])
  .then((response) => {
    console.log("Execution Response ", response);
  })
  .catch((error) => {
    console.log("Execution Error ", error);
  });
