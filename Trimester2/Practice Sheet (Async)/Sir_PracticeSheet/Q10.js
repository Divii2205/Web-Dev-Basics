function fetchItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Error fetching items"), 2000);
    });
}
fetchItems().then(items => console.log(items))
.catch(err => console.log(err))