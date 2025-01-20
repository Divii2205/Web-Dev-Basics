function prepareIngredients(callback){
    setTimeout(function(){
        console.log('Ingredients Prepared')
        callback()
    } , 2000)
}

function cookDish(callback){
    setTimeout(function(){
        console.log('Dish cooked')
        callback()
    } , 5000)
}

function serveDish(callback){
    setTimeout(function(){
        console.log('Dish Served')
        callback()
    } , 6000)
}

function cleanUp(callback){
    setTimeout(function(){
        console.log('Table cleaned')
        callback()
    } , 4000)
}

function feedback(){
    setTimeout(function(){
        console.log('Feedback Received')
    })
}

// Why doesn't this work??
// prepareIngredients(cookDish(serveDish(cleanUp())))

// This structure is called as the 'callback hell / pyramid of doom'
prepareIngredients(function(){
    cookDish(function(){
        serveDish(function(){
            cleanUp(function(){
                feedback()
            })
        })
    })
})