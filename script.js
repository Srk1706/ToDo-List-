var ta = document.getElementById("heading")
var noted = document.getElementById("note")
var rows = document.getElementById("page")
function todo() {
    var div1 = document.createElement("div")
    div1.classList = ' col-xs-12 col-sm-6 col-md-4  mt-1  '
    div1.innerHTML = ` <div class='card' id='bgchange'>
        <div class='card-body'>
            <h1 class='card-title'>${heading.value}</h1>
            <div class='card-text'>
                <p>${note.value}</p>
            </div>
            
            </div>
            
            </div>
            <button class='button bg-info card ' onclick='deleteTodo(event)'>Delete</button>
        
     `
    rows.append(div1)
}

function deleteTodo(event) {
    event.target.parentElement.remove()

}