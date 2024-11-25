let myLeads = []
// in modern javascript 'const' is used to declare variables rather than 'let'
// const cannot be redefined
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads(){
    let listItems = " "
    for (let i = 0; i < myLeads.length; i++){
        // listItems += "<li><a target='_blank' href= ' " + myLeads[i] + " ' >" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href= '${myLeads[i]}'> 
                    ${myLeads[i]}
                </a>
            </li>`
    }
    
    // DOM manipulation comes with a cost
    ulEl.innerHTML = listItems    
}




