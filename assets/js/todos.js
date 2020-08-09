const list = document.getElementById('myUl');

// Cross off specific todos by clicking
$("ul").on("click", "li", function(){
   $(this).toggleClass("completed");
   localStorage.setItem("todoList", list.innerHTML);
});

// Deleting the "li" by clicking the "X"
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
        localStorage.setItem("todoList", list.innerHTML);
    });
    e.stopPropagation();
});

// Adding a new "li" in the To do list
$("input[type='text']").keypress(function(e){
    if(event.which === 13){
        // Takes input value and places into variable
       let todoText = $(this).val();
       if($(this).val() != ""){
        $(this).val("");
        // Creates new "li" and add to the "ul"
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
       }
      localStorage.setItem("todoList", list.innerHTML);
    }
});

// Adding a toggle for the plus to hide or show the "Add a new Todo"

$(".fa-plus").click(function(){
    $("input[type = 'text']").slideToggle("fast");
});

loadTodo();

function loadTodo(){
    if(localStorage.getItem('todoList')){
        list.innerHTML = localStorage.getItem('todoList');
    }
}