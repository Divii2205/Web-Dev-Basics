const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, "King");
});

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, "Queen");
});

Promise.race([myPromise1, myPromise2]).then((x) => {
    console.log(x);
});