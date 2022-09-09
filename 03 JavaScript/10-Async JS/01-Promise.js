const cleanRoom = function () {
  return new Promise((resolve, reject) => {
    let isClean = true;
    if (isClean) {
      resolve("Clean");
    } else {
      reject("Not Clean");
    }
  });
};

const collectCloth = function (arg1) {
  return new Promise((resolve, reject) => {
    let isCollected = true;
    if (isCollected) {
      resolve(arg1 + " cloth collected");
    } else {
      reject(arg1 + " not collected");
    }
  });
};

const eatIcecream = function (arg2) {
  return new Promise((resolve, reject) => {
    resolve(arg2 + " Eat iceCream");
  });
};

cleanRoom()
  .then((result) => {
    console.log(result);
    return collectCloth(result);
  })
  .then((result) => {
    console.log(result);
    return eatIcecream(result);
  })
  .then((result) => {
    console.log(result);
  });

// Promise.all
// console.log(">>>>>>>>>> Promise.all() >>>>>>>>>>");
Promise.all([cleanRoom, collectCloth, eatIcecream]).then(() => {
  console.log("All Promise Resolved!");
});

// Promise.race
// console.log(">>>>>>>>>> Promise.race() >>>>>>>>>>");
Promise.race([cleanRoom, collectCloth, eatIcecream]).then(() => {
  console.log("Promise.race Resolved!");
});
